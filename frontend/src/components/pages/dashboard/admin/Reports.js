import { Link, useNavigate } from 'react-router-dom'
import Pagination from '../../../../common/Pagination'
import fetch, { BASE_API_URL } from '../../../../util/fetch'
import notify from '../../../../util/notify'
import React, { useState } from 'react'
import { metaInitialState } from './TasksList'
import { useSelector } from 'react-redux'

function Reports({ source }) {
  const navigate = useNavigate()
  const { appUser } = useSelector(state => state.app)
  const [reports, setReports] = useState([])
  const [meta, setMeta] = useState(metaInitialState)
  const [page, setPage] = useState(1)
  const [selected, setSelected] = useState({
    week: '',
    student: '',
  })
  const [users, setUsers] = useState([])

  const fetchUsers = async role => {
    try {
      const { data } = await fetch.get({
        url: '/api/users/' + role,
        params: {
          total: 1000,
        },
      })
      if (data?.users) {
        setUsers(
          data?.users.data.map(el => ({
            value: el.id,
            label: el.name,
          }))
        )
      }
    } catch (error) {
      notify({
        type: 'error',
        message: error.message,
      })
    }
  }

  const fetchReports = async () => {
    try {
      const { data } = await fetch.get({
        url: `/api/reports/student/${
          source === 'student' ? appUser.id : selected.student
        }`,
        params: {
          page,
          week: selected.week,
        },
      })
      setReports(data.data)
      setMeta(data.meta)
    } catch (error) {
      notify({
        type: 'error',
        message: error.message,
      })
    }
  }

  React.useEffect(() => {
    if (source !== 'student') fetchUsers('student')
  }, [])

  return (
    <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
      <div className="card-body p-3 w-100 bg-current border-0 d-flex rounded-lg">
        <Link onClick={() => navigate(-1)} className="d-inline-block mt-2">
          <i className="ti-arrow-left font-sm text-white" />
        </Link>
        <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
          Weekly Reports
        </h4>
      </div>
      <div className="card-body p-lg-5 p-4 w-100 border-0 mb-0">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <div className="form-group">
              <label htmlFor="input" className="mont-font fw-600 font-xsss">
                Select Week
              </label>
              <input
                type="week"
                name="week"
                onChange={e =>
                  setSelected({ ...selected, week: e.target.value })
                }
                className="form-control"
              />
            </div>
          </div>
          {source !== 'student' && (
            <div className="col-lg-4 mb-3">
              <div className="form-group">
                <label htmlFor="select" className="mont-font fw-600 font-xsss">
                  Students
                </label>
                <select
                  className="form-control"
                  onChange={e =>
                    setSelected({ ...selected, student: e.target.value })
                  }
                  value={selected.student}
                >
                  <option value="" disabled>
                    Select Student
                  </option>
                  {users.map(user => (
                    <option key={user.value} value={user.value}>
                      {user.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          <div className="col-lg-4 mb-4 d-flex align-items-end justify-content-end pb-2 pr-3">
            <button
              disabled={!selected.week}
              onClick={fetchReports}
              type="button"
              className="btn bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block"
            >
              Get Report
            </button>
          </div>
        </div>
      </div>
      <div className="card-body pl-lg-5 pr-lg-5 w-100 table-responsive-sm">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="bg-current text-white rounded-lg">Student Name</th>
              <th className="bg-current text-white rounded-lg">
                Professor Name
              </th>
              <th className="bg-current text-white rounded-lg">Task Name</th>
              <th className="bg-current text-white rounded-lg">Submission</th>
              <th className="bg-current text-white rounded-lg">Review</th>
              <th className="bg-current text-white rounded-lg">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
              <tr key={report.id}>
                <td>{report.user.name}</td>
                <td>{report.task.created_by.name}</td>
                <td>{report.task.title}</td>
                <td
                  className="text-center cursor-pointer"
                  onClick={() => window.open(`${BASE_API_URL}/${report.attachment}`, '_blank')}
                >
                  <i className="feather-download text-green" /> Download
                </td>
                <td className="text-center">
                  <span className="float-left">
                    {report.detection.label} -{' '}
                    {Math.round(report.detection.score) * 100}%
                  </span>
                </td>
                <td>{report.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination meta={meta} setPage={setPage} />
      </div>
    </div>
  )
}

export default Reports
