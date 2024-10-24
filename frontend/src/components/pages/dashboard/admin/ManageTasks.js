import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import TasksList from './TasksList'
import TaskView from './TaskView'

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

function ManageTasks(props) {
  const navigate = useNavigate()
  const location = useLocation()
  const [taskData, setTaskData] = useState(null)
  const title = props.title

  React.useEffect(() => {
    if (location?.state?.task) {
      setTaskData(location?.state?.task)
    }
  }, [])

  return (
    <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
      <div className="card-body p-3 w-100 bg-current border-0 d-flex rounded-lg">
        <Link
          onClick={() => (taskData ? setTaskData(null) : navigate(-1))}
          className="d-inline-block mt-2"
        >
          <i className="ti-arrow-left font-sm text-white" />
        </Link>

        <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
          {taskData ? taskData?.title || 'Add New Task' : title}
        </h4>
      </div>

      {!taskData ? (
        <>
          {props.role !== 'student' && (
            <div className="text-right mx-4">
              <button
                onClick={() => setTaskData({ newTask: true })}
                className="mt-4 btn bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block"
              >
                + Add New Task
              </button>
            </div>
          )}
          <TasksList onTaskClick={setTaskData} />
        </>
      ) : (
        <TaskView taskData={taskData} setTaskData={setTaskData} />
      )}
    </div>
  )
}

export default ManageTasks
