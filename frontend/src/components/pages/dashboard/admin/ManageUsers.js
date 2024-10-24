import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userInitialState } from '../../auth/Register'
import fetch from '../../../../util/fetch'
import notify from '../../../../util/notify'
import validator from 'validator'

function ManageUsers(props) {
  const navigate = useNavigate()
  const manage = props.manage?.toLowerCase()
  const [loading, setLoading] = React.useState(false)
  const [form, setForm] = React.useState({
    ...userInitialState,
    role: manage,
    password: 'password',
    password_confirmation: 'password',
  })
  const [list, setList] = React.useState([])
  const [meta, setMeta] = React.useState({})
  const [page, setPage] = React.useState(1)

  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const fetchUsers = async () => {
    try {
      const { data } = await fetch.get({
        url: '/api/users/' + manage,
        params: {
          page,
        },
      })
      setList(data.users.data)
      setMeta(data.meta)
    } catch (error) {
      notify({
        type: 'error',
        message: error.message || 'Something went wrong',
      })
    }
  }

  const addUser = async e => {
    e.preventDefault()
    setLoading(true)
    if (!validator.isMobilePhone(form.phone)) {
      notify({
        type: 'error',
        message: 'Invalid phone number',
      })
      return
    }
    try {
      const { data } = await fetch[form.id ? 'put' : 'post']({
        url: form.id ? '/api/update-user/' + form.id : '/api/create-user',
        data: form,
      })
      if (data) {
        notify({
          type: 'success',
          message: form.id
            ? 'User updated successfully'
            : 'User created successfully',
        })
      }
      setForm({
        ...userInitialState,
        role: manage,
        password: 'password',
        password_confirmation: 'password',
      })
      fetchUsers()
    } catch (error) {
      notify({
        type: 'error',
        message: error.message || 'Something went wrong',
      })
    } finally {
      setLoading(false)
    }
  }

  const deletUser = async user => {
    try {
      await fetch.put({
        url: '/api/update-user/' + user.id,
        data: {
          ...user,
          status: user.status === 'active' ? 'inactive' : 'active',
        },
      })
      notify({
        type: 'success',
        message: 'User updated successfully',
      })
      fetchUsers()
    } catch (error) {
      notify({
        type: 'error',
        message: error.message || 'Something went wrong',
      })
    }
  }

  React.useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
      <div className="card-body p-3 w-100 bg-current border-0 d-flex rounded-lg">
        <Link onClick={() => navigate(-1)} className="d-inline-block mt-2">
          <i className="ti-arrow-left font-sm text-white" />
        </Link>
        <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2 text-capitalize">
          Manage {manage}s
        </h4>
      </div>
      <div className="card-body p-lg-5 p-4 w-100 border-0 mb-0">
        <form onSubmit={addUser}>
          <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="form-group">
                <label className="mont-font fw-600 font-xsss">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={handleChange}
                  value={form.name}
                  required
                />
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="form-group">
                <label className="mont-font fw-600 font-xsss">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                  value={form.email}
                  required
                />
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="form-group">
                <label className="mont-font fw-600 font-xsss">
                  Phone Number (only digits)
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  onChange={handleChange}
                  value={form.phone}
                  required
                />
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="form-group">
                <label className="mont-font fw-600 font-xsss">DOB</label>
                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  onChange={handleChange}
                  value={form.dob}
                  required
                />
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="form-group">
                <label className="mont-font fw-600 font-xsss">Gender</label>
                <select
                  name="gender"
                  className="form-control"
                  onChange={handleChange}
                  value={form.gender}
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="form-group">
                <label className="mont-font fw-600 font-xsss">Address</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  value={form.address}
                  name="address"
                  required
                />
              </div>
            </div>
            <div className="col-lg-4">
              <button
                disabled={loading}
                type="submit"
                className="btn bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block"
              >
                {loading
                  ? 'Submitting...'
                  : form.id
                  ? `Edit ${manage}`
                  : `Add ${manage}`}
              </button>
            </div>
          </div>
        </form>
      </div>
      {list.length > 0 && (
        <div className="card-body pl-lg-5 pr-lg-5 w-100 table-responsive-sm">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="bg-current text-white rounded-lg">Name</th>
                <th className="bg-current text-white rounded-lg">Email</th>
                <th className="bg-current text-white rounded-lg">Phone</th>
                <th className="bg-current text-white rounded-lg">Gender</th>
                <th className="bg-current text-white rounded-lg">DOB</th>
                <th className="bg-current text-white rounded-lg">Address</th>
                <th className="bg-current text-white rounded-lg">Status</th>
                <th className="bg-current text-white rounded-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {list.map(student => (
                <tr key={student.id}>
                  <td className="text-capitalize">{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td className="text-capitalize">{student.gender}</td>
                  <td>{student.dob}</td>
                  <td>{student.address}</td>
                  <td className="text-capitalize">{student.status}</td>
                  <td className="text-center">
                    <i
                      className="feather-edit text-current mr-sm-2 mr-md-3 mr-lg-4"
                      style={{ cursor: 'pointer' }}
                      onClick={() => setForm(student)}
                    />
                    <i
                      className={
                        student.status !== 'active'
                          ? 'feather-rotate-ccw text-current'
                          : 'feather-trash text-red'
                      }
                      style={{ cursor: 'pointer' }}
                      onClick={() => deletUser(student)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ManageUsers
