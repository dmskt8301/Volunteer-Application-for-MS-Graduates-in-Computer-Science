import React, { useState } from 'react'
import notify from '../../../../util/notify'
import fetch from '../../../../util/fetch'
import moment from 'moment'
import Pagination from '../../../../common/Pagination'
import { useSelector } from 'react-redux'
import { statuses } from './TaskView'

export const metaInitialState = {
  current_page: 1,
  from: 1,
  last_page: 1,
  links: [],
  path: '',
  per_page: 10,
  to: 10,
  total: 0,
}

function TasksList({ onTaskClick, pageRole }) {
  const {
    appUser: { role: userRole, id },
  } = useSelector(state => state.app)
  const role = pageRole || userRole
  const [tasks, setTasks] = useState([])
  const [meta, setMeta] = useState(metaInitialState)
  const [page, setPage] = useState(1)

  const fetchTasks = async () => {
    try {
      const { data } = await fetch.get({
        url: role === 'admin' ? `/api/tasks` : `/api/tasks/${role}/${id}`,
        params: {
          page,
        },
      })
      setTasks(data.data)
      setMeta(data.meta)
    } catch (error) {
      notify({
        type: 'error',
        message: error.message || 'Something went wrong',
      })
    }
  }

  React.useEffect(() => {
    fetchTasks()
  }, [page])

  return (
    <div className="card-body pl-lg-5 pr-lg-5 w-100 table-responsive-sm">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="bg-current text-white rounded-lg">Task</th>
            <th className="bg-current text-white rounded-lg">Priority</th>
            <th className="bg-current text-white rounded-lg">Deadline</th>
            <th className="bg-current text-white rounded-lg">Created By</th>
            <th className="bg-current text-white rounded-lg">Assigned To</th>
            <th className="bg-current text-white rounded-lg">Status</th>
            <th className="bg-current text-white rounded-lg">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td className="text-capitalize">{task.priority}</td>
              <td width={120} className={task.end_date < moment().format('YYYY-MM-DD') ? 'text-red' : ''}>
                {moment(task.end_date).format('DD-MM-YYYY')} ({moment(task.end_date).fromNow()})
              </td>
              <td>{task.created_by.name}</td>
              <td>{task.user.name}</td>
              <td width={120}>{statuses.find(s => s.value === task.status).label}</td>
              <td className="text-center text-primary">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => onTaskClick(task)}
                >
                  {' '}
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination meta={meta} setPage={setPage} />
    </div>
  )
}

export default TasksList
