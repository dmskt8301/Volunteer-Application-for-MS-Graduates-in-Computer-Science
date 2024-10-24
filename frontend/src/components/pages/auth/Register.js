import React from 'react'
import { Link } from 'react-router-dom'
import fetch from '../../../util/fetch'
import notify from '../../../util/notify'
import validator from 'validator'
import Cookies from 'js-cookie'

export const userInitialState = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  gender: '',
  dob: '',
  phone: '',
  address: '',
  image: '',
  role: 'student',
  check: false,
}

export default function Register() {
  const [form, setForm] = React.useState(userInitialState)
  const [loading, setLoading] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const doRegister = async e => {
    e.preventDefault()

    if (form.password !== form.password_confirmation) {
      notify({
        type: 'error',
        message: 'Password does not match',
      })
      return
    }

    if (!validator.isMobilePhone(form.phone)) {
      notify({
        type: 'error',
        message: 'Invalid phone number',
      })
      return
    }

    if (!form.check) {
      notify({
        type: 'error',
        message: 'Please accept our terms and conditions',
      })
      return
    }

    setLoading(true)
    try {
      await fetch.post({
        url: '/register',
        data: form,
      })
      localStorage.clear()
      await fetch.post({
        url: '/logout',
      })
      Cookies.remove('XSRF-TOKEN')
      setIsSubmitted(true)
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
      <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
        <div className="card shadow-none border-0 ml-auto mr-auto login-card">
          <div className="card-body rounded-0 text-left">
            <h2 className="fw-700 display1-size display2-md-size mb-4">
              Create account
            </h2>
            {isSubmitted ? (
              <p className="alert alert-success">
                Account created successfully, We have sent you an activation
                email. Please check your email.
              </p>
            ) : (
              <form onSubmit={doRegister}>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-user text-grey-500 pr-0" />
                  <input
                    type="text"
                    className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    value={form.name}
                    required
                  />
                </div>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-email text-grey-500 pr-0" />
                  <input
                    type="email"
                    className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Email Address"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                    required
                  />
                </div>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-mobile text-grey-500 pr-0" />
                  <input
                    type="tel"
                    className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                    placeholder="Phone"
                    name="phone"
                    onChange={handleChange}
                    value={form.phone}
                    required
                  />
                </div>
                <div className="form-group icon-input mb-3">
                  <i className="font-sm ti-user text-grey-500 pr-0" />
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                  >
                    <option value="" disabled>
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="form-group icon-input mb-3">
                  <input
                    type={'date'}
                    className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                    placeholder="DOB"
                    name="dob"
                    onChange={handleChange}
                    value={form.dob}
                    required
                  />
                  <i className="font-sm ti-calendar text-grey-500 pr-0" />
                </div>
                <div className="form-group icon-input mb-3">
                  <input
                    type="text"
                    className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                    placeholder="Address"
                    name="address"
                    onChange={handleChange}
                    value={form.address}
                    required
                  />
                  <i className="font-sm ti-home text-grey-500 pr-0" />
                </div>

                <div className="form-group icon-input mb-3">
                  <input
                    type="Password"
                    className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                    required
                  />
                  <i className="font-sm ti-lock text-grey-500 pr-0" />
                </div>
                <div className="form-group icon-input mb-1">
                  <input
                    type="Password"
                    className="style2-input pl-5 form-control text-grey-900 font-xss ls-3"
                    placeholder="Confirm Password"
                    name="password_confirmation"
                    onChange={handleChange}
                    value={form.password_confirmation}
                    required
                  />
                  <i className="font-sm ti-lock text-grey-500 pr-0" />
                </div>
                <div className="form-check text-left mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input mt-2"
                    id="exampleCheck1"
                    name="check"
                    onChange={e =>
                      setForm({ ...form, check: e.target.checked })
                    }
                    value={form.check}
                    required
                  />
                  <label
                    className="form-check-label font-xsss text-grey-500"
                    htmlFor="exampleCheck1"
                  >
                    I've read and accept the Terms &amp; Conditions
                  </label>
                </div>
                <div className="col-sm-12 p-0 text-left">
                  <div className="form-group mb-1">
                    <button
                      type="submit"
                      disabled={!form.check || loading}
                      className={(!form.check || loading) ? "form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0" : "form-control text-center style2-input text-white fw-600 bg-current border-0 p-0"}
                    >
                      {loading ? 'Please wait..' : 'Register'}
                    </button>
                  </div>
                  <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">
                    Already have an account ?
                    <Link to="/auth/login" className="fw-700 ml-1">
                      Login
                    </Link>
                  </h6>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
