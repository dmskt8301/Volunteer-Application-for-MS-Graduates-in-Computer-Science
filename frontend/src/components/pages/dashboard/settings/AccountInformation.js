import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userInitialState } from '../../auth/Register'
import React from 'react'
import Avatar from '../../../../common/Avatar'
import notify from '../../../../util/notify'
import fetch from '../../../../util/fetch'
import { setAppUser } from '../../../../slice/appSlice'

export default function AccountInformation() {
  const dispatch = useDispatch()
  const { appUser = userInitialState } = useSelector(state => state.app)
  const [form, setForm] = React.useState(appUser)

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const fetchUserInfo = async () => {
    try {
      const { data } = await fetch.get({
        url: '/api/user',
      })
      setForm(data.user)
      dispatch(setAppUser(data.user))
    } catch (error) {
      notify({
        type: 'error',
        message: error.message || 'Something went wrong',
      })
    }
  }

  const handleUploadImage = async e => {
    const file = e.target.files[0]

    try {
      const formData = new FormData()
      formData.append('image', file)
      const { data } = await fetch.post({
        url: '/api/user/image',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      setForm({ ...form, image: data.user.image })
      dispatch(setAppUser(data.user))
    } catch (error) {
      notify({
        type: 'error',
        message: error.message || 'Something went wrong',
      })
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await fetch.put({
        url: '/api/user',
        data: form,
      })
      setForm(data.user)
      dispatch(setAppUser(data.user))
      notify({
        type: 'success',
        message: 'Profile updated successfully',
      })
    } catch (error) {
      notify({
        type: 'error',
        message: error.message || 'Something went wrong',
      })
    }
  }

  React.useEffect(() => {
    fetchUserInfo()
  }, [])

  return (
    <div>
      <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-lg">
        <Link to="/dashboard/settings" className="d-inline-block mt-2">
          <i className="ti-arrow-left font-sm text-white" />
        </Link>
        <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
          Account Information
        </h4>
      </div>
      <div className="card-body p-lg-5 p-4 w-100 border-0">
        <div className="row justify-content-center">
          <div className="col-lg-4 text-center position-relative">
            <Avatar img={form.image} />
            <i
              className="ti-pencil font-xl cursor-pointer"
              style={{
                position: 'absolute',
                top: 0,
                right: 70,
                background: '#fff',
              }}
            />
            <input
              onChange={handleUploadImage}
              type="file"
              id="file"
              accept="image/*"
              style={{
                cursor: 'pointer',
                opacity: 0,
                position: 'absolute',
                top: 0,
                right: 70,
                background: '#fff',
              }}
            />
            <h2 className="fw-700 font-sm text-grey-900 mt-3">{form.name}</h2>
          </div>
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-12 mb-3">
              <div className="form-group">
                <label htmlFor="input" className="mont-font fw-600 font-xsss">
                  Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-3">
              <div className="form-group">
                <label htmlFor="input" className="mont-font fw-600 font-xsss">
                  Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  disabled
                />
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div className="form-group">
                <label htmlFor="input" className="mont-font fw-600 font-xsss">
                  Phone
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-3">
              <div className="form-group">
                <label htmlFor="input" className="mont-font fw-600 font-xsss">
                  Gender
                </label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option disabled value="">
                    Select
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <div className="form-group">
                <label htmlFor="input" className="mont-font fw-600 font-xsss">
                  DOB
                </label>
                <input
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  type="date"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mb-3">
              <div className="form-group">
                <label htmlFor="input" className="mont-font fw-600 font-xsss">
                  Address
                </label>
                <input
                  value={form.address}
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="address"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12 text-center pt-3">
            <button
              type="submit"
              className="btn bg-current text-center text-white font-xsss fw-600 p-2 w200 rounded-lg d-inline-block"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
