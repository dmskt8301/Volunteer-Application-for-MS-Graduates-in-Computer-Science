import React from 'react'
import Select from 'react-select'
import notify from '../../../../util/notify'
import fetch, { BASE_API_URL, CAPTCHA_SITE_KEY } from '../../../../util/fetch'
import { useSelector } from 'react-redux'
import pdfToText from 'react-pdftotext'
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from 'react-google-recaptcha-v3'
import PizZip from 'pizzip'
import { DOMParser } from '@xmldom/xmldom'

const priorities = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
]

export const statuses = [
  { value: 'to_do', label: 'To Do' },
  { value: 'assigned', label: 'Assigned' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'completed', label: 'Completed' },
  { value: 'on_hold', label: 'On Hold' },
  { value: 'cancelled', label: 'Cancelled' },
]

export const taskInitialState = {
  title: '',
  description: '',
  start_date: '',
  end_date: '',
  priority: '',
  created_by: '',
  user_id: '',
  comments: [],
  status: '',
}

function TaskView({ taskData, setTaskData }) {
  const { appUser } = useSelector(state => state.app)
  const [form, setForm] = React.useState(taskData || taskInitialState)
  const [students, setStudents] = React.useState([])
  const [comments, setComments] = React.useState([])
  const [comment, setComment] = React.useState('')
  const [reports, setReports] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
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

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await fetch[taskData?.id ? 'put' : 'post']({
        url: taskData?.id ? `/api/tasks/${taskData.id}` : '/api/tasks',
        data: {
          ...form,
          priority: form.priority.value,
          user_id: form.user_id.value || '',
          status: form.status.value,
          created_by: taskData?.created_by?.id || appUser.id,
          comments:
            comments.map(el => {
              const { comment, user } = el
              return { comment, user_id: user.id }
            }) || [],
        },
      })
      if (data) {
        setTaskData(data.data)
        notify({
          type: 'success',
          message: 'Task updated successfully',
        })
      }
    } catch (error) {
      notify({
        type: 'error',
        message: error.message,
      })
    }
  }

  const handleAddComment = async () => {
    setComments([...comments, { comment, user: appUser }])
    try {
      const { data } = await fetch.put({
        url: `/api/tasks/${taskData.id}`,
        data: {
          ...form,
          priority: form.priority.value,
          user_id: form.user_id.value,
          status: form.status.value,
          created_by: taskData?.created_by?.id || appUser.id,
          comments:
            [...comments, { comment, user: appUser }].map(el => {
              const { comment, user } = el
              return { comment, user_id: user.id }
            }) || [],
        },
      })
      if (data) {
        setComment('')

        notify({
          type: 'success',
          message: 'Comment added successfully',
        })
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
        url: '/api/reports/task/' + taskData.id,
        params: {
          total: 1000,
        },
      })
      setReports(data.data)
    } catch (error) {
      notify({
        type: 'error',
        message: error.message,
      })
    }
  }

  React.useEffect(() => {
    if(typeof form.priority === 'object') form.priority = form.priority.value
    setForm({
      ...taskData,
      priority: priorities.find(el => el.value === form.priority),
      user_id: { value: taskData?.user?.id, label: taskData?.user?.name },
      status: statuses.find(el => el.value === form.status),
    })

    setComments(taskData?.comments || [])

    if (taskData?.id) fetchReports()
  }, [taskData])

  React.useEffect(() => {
    fetchStudents()
  }, [])

  const disableForStudent = appUser.role === 'student'

  const addReport = async () => {
    try {
      const { data } = await fetch.post({
        url: `/api/reports`,
        data: {
          hours_spent: form.hours_spent,
          task_id: form.id,
          user_id: form.user.id,
          attachment: form.attachment,
          detection: form.detection,
          feedback: '',
          status: 'pending', // pending, completed, rejected
        },
      })
      if (data) {
        setForm({ ...form, attachment: '', detection: '', hours_spent: '' })
        fileInputRef.current.value = ''
        setRefreshReCaptcha(r => !r)
        fetchReports()
        notify({
          type: 'success',
          message: 'Report added successfully',
        })
      }
    } catch (error) {
      notify({
        type: 'error',
        message: error.message,
      })
    }
  }

  const validatePlagiarism = async (text, file) => {
    setLoading(true)
    try {
      const { data } = await fetch.post({
        url: 'api/detection',
        data: {
          text: encodeURIComponent(text),
        },
      })

      if (data) {
        handleFileUpload(file, data)
        notify({
          type: 'success',
          message: 'Plagiarism validated successfully',
        })
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

  function str2xml(str) {
    if (str.charCodeAt(0) === 65279) {
      // BOM sequence
      str = str.substr(1)
    }
    return new DOMParser().parseFromString(str, 'text/xml')
  }

  // Get paragraphs as javascript array
  function getParagraphs(content) {
    const zip = new PizZip(content)
    const xml = str2xml(zip.files['word/document.xml'].asText())
    const paragraphsXml = xml.getElementsByTagName('w:p')
    const paragraphs = []

    for (let i = 0, len = paragraphsXml.length; i < len; i++) {
      let fullText = ''
      const textsXml = paragraphsXml[i].getElementsByTagName('w:t')
      for (let j = 0, len2 = textsXml.length; j < len2; j++) {
        const textXml = textsXml[j]
        if (textXml.childNodes) {
          fullText += textXml.childNodes[0].nodeValue
        }
      }
      if (fullText) {
        paragraphs.push(fullText)
      }
    }
    return paragraphs
  }

  const parseDocx = async file => {
    const reader = new FileReader()
    reader.onload = e => {
      const content = e.target.result
      const paragraphs = getParagraphs(content)
      validatePlagiarism(paragraphs.join('\n'), file)
    }

    reader.onerror = err => console.error(err)

    reader.readAsBinaryString(file)
  }

  const parseTXT = async file => {
    const reader = new FileReader()

    reader.onload = event => {
      const txtText = event.target.result
      validatePlagiarism(txtText, file)
    }

    reader.readAsText(file)
  }

  const onFileUpload = event => {
    if (!event.target.files.length) {
      return
    }

    const file = event.target.files[0]

    // read extension from file
    const extension = file.name
      .substring(file.name.lastIndexOf('.') + 1)
      .toLowerCase()

    if (extension === 'txt') {
      parseTXT(file)
    } else if (extension === 'docx') {
      parseDocx(file)
    } else {
      pdfToText(file)
        .then(text => validatePlagiarism(text, file))
        .catch(error => console.error('Failed to extract text from pdf'))
    }
  }

  const handleFileUpload = async (file, payload) => {
    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('document', file)
      const { data } = await fetch.post({
        url: '/api/upload-document',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      if (data) {
        setForm({
          ...form,
          detection: payload,
          attachment: data.document,
        })
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

  const fileInputRef = React.useRef(null)
  const [refreshReCaptcha, setRefreshReCaptcha] = React.useState(false)
  const [token, setToken] = React.useState(null)

  const onVerify = React.useCallback(token => {
    setToken(token)
  }, [])

  return (
    <>
      <div className="card-body p-lg-5 px-4 py-2 w-100 border-0 mb-0">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="form-group">
                <label htmlFor="input" className="mont-font fw-600 font-xsss">
                  Title
                </label>
                <input
                  disabled={disableForStudent}
                  onChange={handleChange}
                  type="text"
                  name="title"
                  value={form.title}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-8 mb-3">
              <div className="form-group">
                <label htmlFor="input" className="mont-font fw-600 font-xsss">
                  Description
                </label>
                <input
                  disabled={disableForStudent}
                  onChange={handleChange}
                  value={form.description}
                  className="form-control"
                  name="description"
                />
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="form-group">
                <label htmlFor="select" className="mont-font fw-600 font-xsss">
                  Start Date
                </label>
                <input
                  disabled={disableForStudent}
                  onChange={handleChange}
                  value={form.start_date}
                  type="date"
                  name="start_date"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="form-group">
                <label htmlFor="select" className="mont-font fw-600 font-xsss">
                  End Date
                </label>
                <input
                  disabled={disableForStudent}
                  onChange={handleChange}
                  value={form.end_date}
                  type="date"
                  name="end_date"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="form-group">
                <label htmlFor="select" className="mont-font fw-600 font-xsss">
                  Priority
                </label>
                <Select
                  isDisabled={disableForStudent}
                  options={priorities}
                  value={form.priority}
                  onChange={e => setForm({ ...form, priority: e })}
                  placeholder="Select Priority"
                />
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="form-group">
                <label htmlFor="input" className="mont-font fw-600 font-xsss">
                  Student
                </label>
                <Select
                  isDisabled={disableForStudent}
                  options={students}
                  value={form.user_id}
                  onChange={e => setForm({ ...form, user_id: e })}
                  placeholder="Select Student"
                />
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="form-group">
                <label htmlFor="input" className="mont-font fw-600 font-xssss">
                  Status
                  <span className="text-red"> (Update this only after Submitting your Report)</span>
                </label>
                <Select
                  isDisabled={taskData.status === 'completed' || taskData.status === 'on_hold' || taskData.status === 'cancelled' || new Date(taskData.end_date) < new Date()}
                  options={statuses}
                  value={form.status}
                  onChange={e => setForm({ ...form, status: e })}
                  placeholder="Select Status"
                />
              </div>
            </div>

            <div className="col-lg-4 mb-4 d-flex align-items-end justify-content-end pb-2 pr-3">
              <button
                disabled={taskData.status === 'completed' || taskData.status === 'on_hold' || taskData.status === 'cancelled' || new Date(taskData.end_date) < new Date()}
                type="submit"
                className="btn btn-primary"
              >
                Submit Task
              </button>
            </div>
          </div>
        </form>

        <hr />

        {appUser.role === 'student' && (taskData.status !== 'completed' && taskData.status !== 'on_hold' && taskData.status !== 'cancelled' && new Date(taskData.end_date) > new Date()) && (
          <>
            <div>
              <h2 className="font-xs fw-600 text-grey-500 mb-3">
                Submission{' '}
                <span className="text-red font-xsss">
                  (Supported Formats: pdf, docx, txt | File Size Limit: 2MB)
                </span>
              </h2>
              <div className="row">
                <div className="col-lg-6">
                  <div className="col-lg-4 mb-3">
                    <div className="form-group">
                      <label
                        htmlFor="input"
                        className="mont-font fw-600 font-xsss"
                      >
                        Hours Spent
                      </label>
                      <input
                        className="form-control"
                        onChange={handleChange}
                        type="number"
                        name="hours_spent"
                        value={form.hours_spent}
                        min={0}
                        max={21}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept=".pdf,.docx,.txt"
                      onChange={onFileUpload}
                    />
                  </div>
                </div>
                <div className="col-lg-6 align-self-end">
                  {loading ? (
                    <h6 className="font-xs fw-600">
                      Fetching Plagiarism Report
                    </h6>
                  ) : (
                    ''
                  )}
                  {form?.detection && (
                    <>
                      {' '}
                      <h6 className="font-xs fw-600"> Plagiarism Report</h6>
                      <p className="font-xs mb-1">{form?.detection?.label}</p>
                      <p className="font-xs">
                        {form?.detection?.score
                          ? Math.round(form?.detection?.score * 100)
                          : 0}
                      </p>
                    </>
                  )}

                  <GoogleReCaptchaProvider reCaptchaKey={CAPTCHA_SITE_KEY}>
                    <GoogleReCaptcha
                      onVerify={onVerify}
                      refreshReCaptcha={refreshReCaptcha}
                    />
                  </GoogleReCaptchaProvider>

                  <button
                    disabled={
                      !form.hours_spent || !form.attachment || loading || !token
                    }
                    onClick={addReport}
                    className="btn btn-primary"
                  >
                    Submit Report
                  </button>
                </div>
              </div>
            </div>
            <hr />
          </>
        )}

        {taskData.id && (
          <>
            <h6 className="font-xs fw-600 text-grey-500 ">Comments</h6>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Write your comments here"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                onChange={e => {
                  setComment(e.target.value)
                }}
                value={comment}
              />
              <button
                onClick={handleAddComment}
                className="btn btn-outline-primary"
                type="button"
                id="button-addon2"
              >
                Submit
              </button>
            </div>
          </>
        )}

        {comments.map((comment, index) => (
          <div
            key={index}
            className={`${
              index === comments.length - 1 ? 'mt-2' : 'border-bottom pb-2'
            }`}
          >
            <p className="card-text mb-0" key={index}>
              {comment.comment}
            </p>
            <small className="text-primary fw-bold">{comment.user.name}</small>
          </div>
        ))}
      </div>

      <div className="card-body pl-lg-5 pr-lg-5 w-100 table-responsive-sm">
        <hr />
        <h6 className="font-xs fw-600 text-grey-500 my-3 ">Reports</h6>
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
                  <span>
                    {report.detection.label} -{' '}
                    {Math.round(report.detection.score * 100)}%
                  </span>
                </td>
                <td>{report.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TaskView
