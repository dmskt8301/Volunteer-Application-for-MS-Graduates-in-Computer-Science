import React from 'react'
import notify from '../../../util/notify'
import fetch from '../../../util/fetch'

export default function ForgotPassword() {
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const passwordReset = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } = await fetch.post({
        url: '/forgot-password',
        params: { email },
      })

      setEmail('')
      if (data) {
        notify({ type: 'success', message: data.status })
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
      <div className="col-xl-7 vh-lg-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
        <div className="card shadow-none border-0 ml-auto mr-auto login-card">
          <div className="card-body rounded-0 text-left">
            <h2 className="fw-700 display1-size display2-md-size mb-4">
              Forgot Password
            </h2>
            <p className="font-xsss fw-500 text-grey-500 lh-28">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
            <form onSubmit={passwordReset}>
              <div className="form-group icon-input mb-3">
                <input
                  required
                  type="email"
                  className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <i className="font-sm ti-email text-grey-500 pr-0" />
              </div>
              <div className="col-sm-12 p-0 text-left">
                <div className="form-group mb-1">
                  <button
                    disabled={loading}
                    type="submit"
                    to="/auth/login"
                    className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0"
                  >
                    {loading ? 'Sending...' : 'Submit'}
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
