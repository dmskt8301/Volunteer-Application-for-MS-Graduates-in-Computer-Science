import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import fetch, { BASE_API_URL } from '../../../../util/fetch'
import notify from '../../../../util/notify'
import { metaInitialState } from './TasksList'
import Pagination from '../../../../common/Pagination'
import { useSelector } from 'react-redux'

function Reviews({ source }) {
  const { appUser } = useSelector(state => state.app)
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  const [selected, setSelected] = useState({
    week: '',
    student: '',
  })

  const [reports, setReports] = useState([])
  const [meta, setMeta] = useState(metaInitialState)
  const [page, setPage] = useState(1)
  const [text, setText] = useState('')
  const [active, setActive] = useState()

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
        url:
          selected.student || source
            ? `/api/reports/student/${source ? appUser.id : selected.student}`
            : '/api/reports',
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

  const submitFeedback = async record => {
    try {
      const { data } = await fetch.put({
        url: '/api/reports/' + record.id,
        data: {
          task_id: record.task.id,
          user_id: record.user.id,
          attachment: record.attachment,
          detection: record.detection,
          feedback: text,
          hours_spent: record.hours_spent || 21,
          status: record.status, // pending, completed, rejected
        },
      })
      setActive(null)
      setText('')
      fetchReports()
      if (data) {
        notify({
          type: 'success',
          message: 'Feedback added successfully',
        })
      }
    } catch (error) {
      notify({
        type: 'error',
        message: error.message,
      })
    }
  }

  React.useEffect(() => {
    fetchReports()
  }, [page])

  React.useEffect(() => {
    if (!source) {
      fetchUsers('student')
    }
  }, [source])

  return (
    <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
      <div className="card-body p-3 w-100 bg-current border-0 d-flex rounded-lg">
        <Link onClick={() => navigate(-1)} className="d-inline-block mt-2">
          <i className="ti-arrow-left font-sm text-white" />
        </Link>
        <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
          Reviews & Feedback
        </h4>
      </div>
      <div className="card-body p-lg-5 p-4 w-100 border-0 mb-0">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="form-group">
              <label htmlFor="select" className="mont-font fw-600 font-xsss">
                Week
              </label>

              <input
                type="week"
                value={selected.week}
                onChange={e =>
                  setSelected({ ...selected, week: e.target.value })
                }
                className="form-control"
              />
            </div>
          </div>
          {source !== 'student' && (
            <div className="col-lg-4">
              <div className="form-group">
                <label htmlFor="select" className="mont-font fw-600 font-xsss">
                  Students
                </label>

                <select
                  value={selected.student}
                  onChange={e =>
                    setSelected({ ...selected, student: e.target.value })
                  }
                  className="form-control"
                >
                  <option value="" disabled>
                    Select Student
                  </option>
                  {users.map((user, i) => (
                    <option key={i} value={user.value}>
                      {user.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          <div className="col-lg-4">
            <button
              type="button"
              onClick={fetchReports}
              className="btn btn-primary btn-lg border-0 mt-3"
            >
              Apply Filter
            </button>

            <button
              type="button"
              onClick={() => setSelected({ week: '', student: '' })}
              className="ml-3 btn btn-outline-primary btn-lg border-0 mt-3"
            >
              Reset
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
              (appUser.role === 'admin' || (appUser.role === 'professor' && report.task.created_by.id === appUser.id) || (appUser.role === 'student' && report.task.user.id === appUser.id)) &&
              (<tr key={report.id}>
                <td>{report.user.name}</td>
                <td>{report.task.created_by.name}</td>
                <td>{report.task.title}</td>
                <td
                  className="text-center cursor-pointer"
                  onClick={() => window.open(`${BASE_API_URL}/${report.attachment}`, '_blank')}
                >
                  <i className="feather-download text-green" /> Download
                </td>
                <td className="text-center" width={200}>
                  <span>
                    {Math.round(report.detection.score * 100)}%
                    <br/>
                    {report.detection.label}
                  </span>
                </td>
                {source ? (
                  <td>{report.feedback}</td>
                ) : (
                  <td>
                    {report.feedback && active !== report.id ? (
                      <div className="row align-items-center">
                        <div className="col-9">{report.feedback} </div>{' '}
                        <div className="col-3">
                          {/* edit icon  */}
                          <i
                            className="feather-edit text-primary cursor-pointer"
                            onClick={() => {
                              setActive(report.id)
                              setText(report.feedback)
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <input
                          onChange={e => {
                            setActive(report.id)
                            setText(e.target.value)
                          }}
                          value={active === report.id ? text : report.feedback}
                          type="text"
                          className="form-control"
                          placeholder="Type your feedback here"
                        />
                        <button
                          onClick={() => submitFeedback(report)}
                          className="btn bg-current text-center text-white font-xsss fw-600 p-1 mt-2 w150 rounded-lg d-inline-block float-right"
                        >
                          Submit Feedback
                        </button>
                      </>
                    )}
                  </td>
                )}
              </tr>)
            ))}
          </tbody>
        </table>
        <Pagination meta={meta} setPage={setPage} />
      </div>
    </div>
  )
}

export default Reviews
