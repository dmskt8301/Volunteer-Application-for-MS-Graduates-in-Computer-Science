import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import notify from '../../../util/notify'
import fetch from '../../../util/fetch'
import { useDispatch } from 'react-redux'
import { setAppUser } from '../../../slice/appSlice'
import { logout, fetchToken } from '../../App'
import Cookies from 'js-cookie'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = React.useState({
    email: '',
    password: '',
  })

  
  const doLogin = async e => {
    if (!Cookies.get('XSRF-TOKEN')) fetchToken()
    e.preventDefault()
    try {
      const { data } = await fetch.post({
        url: '/login',
        params: form,
      })
      const { user } = data
      localStorage.setItem('userRole', user.role)
      dispatch(setAppUser(user))
      navigate('/dashboard/' + user.role)
    } catch (error) {
      if (!error.message) logout()

      notify({
        type: 'error',
        message: error.message,
      })
    }
  }

  return (
    <div className="row">
      <div
        className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/images/login-bg.jpg)' }}
      />
      <div className="col-xl-7 vh-lg-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
        <div className="card shadow-none border-0 ml-auto mr-auto login-card">
          <div className="card-body rounded-0 text-left">
            <h2 className="fw-700 display1-size display2-md-size mb-3">
              Login
            </h2>
            <form onSubmit={doLogin}>
              <div className="form-group icon-input mb-3">
                <i className="font-sm ti-email text-grey-500 pr-0" />
                <input
                  type="email"
                  className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                  placeholder="Email Address"
                  required
                  name="email"
                  onChange={e =>
                    setForm({
                      ...form,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={form.email}
                />
              </div>
              <div className="form-group icon-input mb-1">
                <input
                  type="Password"
                  className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                  placeholder="Password"
                  required
                  name="password"
                  onChange={e =>
                    setForm({
                      ...form,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={form.password}
                  minLength={8}
                />
                <i className="font-sm ti-lock text-grey-500 pr-0" />
              </div>

              <div className="mb-3 text-right">
                <Link
                  to="/auth/forgot-password"
                  className="font-xssss text-grey-500 mt-3 d-inline-block fw-600"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="col-sm-12 p-0 text-left">
                <div className="form-group mb-1">
                  <button
                    type="submit"
                    className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0"
                  >
                    Login
                  </button>
                </div>

                <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                  Don't have account ?
                  <Link to="/auth/register" className="fw-700 ml-1">
                    Register
                  </Link>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
