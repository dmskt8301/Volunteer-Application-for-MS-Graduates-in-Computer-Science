import React from 'react'
import notify from '../../../util/notify'
import fetch from '../../../util/fetch'
import { useNavigate, useParams } from 'react-router-dom'

export default function ResetPassword() {
  const navigate = useNavigate()
  const { token } = useParams()
  const email = window.location.search.split('=')[1]
  const [loading, setLoading] = React.useState(false)
  const [form, setForm] = React.useState({
    password: '',
    password_confirmation: '',
  })

  const passwordReset = async e => {
    e.preventDefault()

    if (form.password !== form.password_confirmation) {
      notify({
        type: 'error',
        message: 'Password does not match',
      })
      return
    }

    setLoading(true)
    try {
      const { data } = await fetch.post({
        url: '/reset-password',
        data: { ...form, token, email },
      })

      if (data) {
        notify({ type: 'success', message: data.status })
        navigate('/auth/login')
      }
    } catch (error) {
      notify({
        type: 'error',
        message: error.message,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row">
      <div
        className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/images/login-bg-2.jpg)' }}
      />
      <div className="col-xl-7 vh-lg-100  d-flex bg-white rounded-lg overflow-hidden">
        <div
          style={{ marginTop: '5rem' }}
          className="card shadow-none border-0 ml-auto mr-auto login-card"
        >
          <div className="card-body rounded-0 text-left">
            <h2 className="fw-700 display1-size display2-md-size mb-4">
              Reset Password
            </h2>

            <form onSubmit={passwordReset}>
              <div className="form-group icon-input mb-3">
                <input
                  required
                  type="email"
                  className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                  placeholder="Enter your email"
                  value={email}
                  disabled
                />
                <i className="font-sm ti-email text-grey-500 pr-0" />
              </div>
              <div className="form-group icon-input mb-3">
                <input
                  required
                  type="password"
                  className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                  placeholder="Password"
                  minLength={8}
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                />
                <i className="font-sm ti-lock text-grey-500 pr-0" />
              </div>
              <div className="form-group icon-input mb-3">
                <input
                  required
                  type="password"
                  className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                  placeholder="Confirm Password"
                  minLength={8}
                  value={form.password_confirmation}
                  onChange={e =>
                    setForm({ ...form, password_confirmation: e.target.value })
                  }
                />
                <i className="font-sm ti-lock text-grey-500 pr-0" />
              </div>
              <div className="col-sm-12 p-0 text-left">
                <div className="form-group mb-1">
                  <button
                    disabled={loading}
                    type="submit"
                    to="/auth/login"
                    className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0"
                  >
                    {loading ? 'Please wait...' : 'Submit'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
