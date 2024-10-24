import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import fetch, { BASE_API_URL } from '../../../../util/fetch'
import notify from '../../../../util/notify'
import { metaInitialState } from './TasksList'
import { useSelector } from 'react-redux'
import Pagination from '../../../../common/Pagination'

function RecommendationLetters({ source }) {
  const navigate = useNavigate()
  const { appUser } = useSelector(state => state.app)

  const [records, setRecords] = React.useState([])
  const [meta, setMeta] = React.useState(metaInitialState)
  const [page, setPage] = React.useState(1)
  const [students, setStudents] = React.useState([])
  const [selected, setSelected] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const fetchRecords = async () => {
    try {
      const { data } = await fetch.get({
        url: '/api/recommendation_letters/' + source + '/' + appUser.id,
        params: {
          page,
        },
      })
      setRecords(data.data)
      setMeta(data.meta)
    } catch (error) {
      notify({
        type: 'error',
        message: error.message || 'Something went wrong',
      })
    }
  }

  const fetchStudents = async () => {
    try {
      const { data } = await fetch.get({
        url: '/api/users/student?count=1000',
      })
      if (data?.users) {
        setStudents(
          data.users.data.map(el => ({ value: el.id, label: el.name }))
        )
      }
    } catch (error) {
      notify({
        type: 'error',
        message: error.message,
      })
    }
  }

  const generateLetter = async () => {
    setLoading(true)
    try {
      const { data } = await fetch.post({
        url: '/api/recommendation_letters',
        data: {
          professor_id: appUser.id,
          user_id: selected,
        },
      })
      setSelected('')
      if (data) {
        notify({
          type: 'success',
          message: 'Recommendation letter generated successfully',
        })
        fetchRecords()
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

  const deleteRecord = async id => {
    try {
      const { data } = await fetch.delete({
        url: '/api/recommendation_letters/' + id,
      })
      if (data) {
        notify({
          type: 'success',
          message: 'Recommendation letter deleted successfully',
        })
        fetchRecords()
      }
    } catch (error) {
      notify({
        type: 'error',
        message: error.message,
      })
    }
  }

  React.useEffect(() => {
    fetchRecords()
  }, [page])

  React.useEffect(() => {
    fetchStudents()
  }, [])

  return (
    <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
      <div className="card-body p-3 w-100 bg-current border-0 d-flex rounded-lg">
        <Link onClick={() => navigate(-1)} className="d-inline-block mt-2">
          <i className="ti-arrow-left font-sm text-white" />
        </Link>
        <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
          Recommendation Letters
        </h4>
      </div>
      {appUser.role === 'professor' && (
        <div className="card-body p-lg-5 p-4 w-100 border-0 mb-0">
          <div className="row">
            <div className="col-lg-6 mb-3">
              <div className="form-group">
                <label htmlFor="input" className="mont-font fw-600 font-xsss">
                  Student ID
                </label>
                <select
                  value={selected}
                  onChange={e => setSelected(e.target.value)}
                  className="form-control"
                  id="input"
                >
                  <option value="" disabled>
                    Select Student
                  </option>
                  {students.map(student => (
                    <option key={student.value} value={student.value}>
                      {student.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-lg-6 mb-4 d-flex align-items-end justify-content-end pb-2 pr-3">
              <button
                disabled={!selected || loading}
                type="button"
                onClick={generateLetter}
                className="btn bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block"
              >
                {loading ? 'Generating...' : 'Generate Report'}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="card-body pl-lg-5 pr-lg-5 w-100 table-responsive-sm">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="bg-current text-white rounded-lg">Professor</th>
              <th className="bg-current text-white rounded-lg">Student</th>
              <th className="bg-current text-white rounded-lg">Letter</th>
              {appUser.role !== 'student' && (
                <th className="bg-current text-white rounded-lg">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={record.id}>
                <td>{record.professor.name}</td>
                <td>{record.user.name}</td>
                <td className="text-center">
                  <a
                    href={`${BASE_API_URL}/${record.letter}`}
                    download={`${BASE_API_URL}/${record.letter}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="feather-download text-green" /> Download
                  </a>
                </td>
                {appUser.role !== 'student' && (
                  <td>
                    <button
                      onClick={() => deleteRecord(record.id)}
                      className="btn btn-danger"
                    >
                      <i className="feather-trash-2" />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination meta={meta} setPage={setPage} />
      </div>
    </div>
  )
}

export default RecommendationLetters
