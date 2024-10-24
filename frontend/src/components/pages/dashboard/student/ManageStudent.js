import React, { useState, useMemo } from 'react'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import ApexCharts from 'react-apexcharts'
import moment from 'moment'
import randomEvents from './Events'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import fetch from '../../../../util/fetch'
import notify from '../../../../util/notify'

const localizer = momentLocalizer(moment)

function ManageStudent() {
  const navigate = useNavigate()
  const {
    stats,
    appUser: { id, role },
  } = useSelector(state => state.app)

  const [tasks, setTasks] = useState([])

  const handleSelectEvent = event => {
    navigate('manage-task', { state: { task: event } })
  }

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  )

  const borderColor = '#E4E4E4'

  const pendingTasksOptions = setBarChartOptions(borderColor)
  const hoursSpentOptions = setBarChartOptions(borderColor)
  const reportsSubmitted = setBarChartOptions(borderColor)

  function setBarChartOptions(color) {
    return {
      chart: {
        id: 'basic-bar',
        type: 'bar',
        height: '50%',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      tooltip: {
        enabled: false,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        axisBorder: {
          show: false,
          color: color,
        },
        axisTicks: {
          show: false,
        },
      },
      grid: {
        borderColor: color,
        strokeDashArray: 0,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      stroke: {
        curve: 'smooth',
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          columnWidth: '80%',
        },
      },
      states: {
        hover: {
          filter: {
            type: 'darken',
            value: 0.9,
          },
        },
      },
      legend: {
        show: false,
      },
    }
  }

  const pendingTasksSeries = [
    {
      name: 'PendingTasks',
      data: Array.from({ length: 5 }, () => Math.ceil(25 + Math.random() * 100)),
    },
  ]
  const hoursSpentSeries = [
    {
      name: 'HoursSpent',
      data: Array.from({ length: 5 }, () => Math.ceil(25 + Math.random() * 100)),
    },
  ]
  const reportsSubmittedSeries = [
    {
      name: 'ReportsSubmitted',
      data: Array.from({ length: 5 }, () => Math.ceil(25 + Math.random() * 100)),
    },
  ]

  const fetchTasks = async () => {
    try {
      const { data } = await fetch.get({
        url: `/api/tasks/${role}/${id}`,
        params: {
          count: 1000,
        },
      })
      if (data.data) {
        const list = data.data.map(el => {
          return {
            ...el,
            start: new Date(el.start_date),
            end: new Date(el.end_date),
          }
        })
        setTasks(list)
      }
    } catch (error) {
      notify({
        type: 'error',
        message: error.message || 'Something went wrong',
      })
    }
  }

  React.useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <>
      <div
        className="card w-100 border-0 mb-4"
        style={{ backgroundColor: 'transparent' }}
      >
        <div className="card-body w-100 border-0 p-0 mb-0">
          <div className="row">
            <div className="col-xl-4 col-lg-12 mt-4 mt-xl-0">
              <div className="card w-100 border-0 rounded-xxl bg-white shadow-xs overflow-hidden">
                <div className="card-body">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="text-grey-900 fw-700 display1-size mt-2 mb-2 ls-3 lh-1">
                        {stats.pending_tasks}
                      </h2>
                      <h4 className="fw-700 text-grey-500 font-xsssss ls-3 text-uppercase mb-0 mt-0">
                        Pending Tasks
                      </h4>
                    </div>
                    <div className="col-5 text-left">
                      <ApexCharts
                        options={pendingTasksOptions}
                        series={pendingTasksSeries}
                        type="bar"
                        height={'50%'}
                        width={'100%'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 mt-4 mt-xl-0">
              <div className="card w-100 border-0 rounded-xxl bg-white shadow-xs overflow-hidden">
                <div className="card-body">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="text-grey-900 fw-700 display1-size mt-2 mb-2 ls-3 lh-1">
                        {stats.hours_spent_in_this_week}
                      </h2>
                      <h4 className="fw-700 text-grey-500 font-xsssss ls-3 text-uppercase mb-0 mt-0">
                        Hours Spent in this Week
                      </h4>
                    </div>
                    <div className="col-5 text-left">
                      <ApexCharts
                        options={hoursSpentOptions}
                        series={hoursSpentSeries}
                        type="bar"
                        height={'50%'}
                        width={'100%'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 mt-4 mt-xl-0">
              <div className="card w-100 border-0 rounded-xxl bg-white shadow-xs overflow-hidden">
                <div className="card-body">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="text-grey-900 fw-700 display1-size mt-2 mb-2 ls-3 lh-1">
                        {stats.reports_submitted}
                      </h2>
                      <h4 className="fw-700 text-grey-500 font-xsssss ls-3 text-uppercase mb-0 mt-0">
                        Reports Submitted
                      </h4>
                    </div>
                    <div className="col-5 text-left">
                      <ApexCharts
                        options={reportsSubmitted}
                        series={reportsSubmittedSeries}
                        type="bar"
                        height={'50%'}
                        width={'100%'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
      <div className=" card w-100 border-0 mb-4 p-4">
        <h5 className="fw-700"> Quick Links</h5>
        <div className="row mt-2">
          <div
            onClick={() => navigate('/dashboard/student/manage-task')}
            className="cursor-pointer col-xl-4 col-lg-12 mt-4 mt-xl-0"
          >
            <div className="card w-100 border bg-primary overflow-hidden">
              <div className="card-body">
                <h4 className="fw-700 text-light font-xsss ls-3 text-uppercase mb-0 mt-0">
                  My Tasks
                </h4>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate('/dashboard/student/review-and-feedback')}
            className="cursor-pointer col-xl-4 col-lg-12 mt-4 mt-xl-0"
          >
            <div className="card w-100 border bg-primary overflow-hidden">
              <div className="card-body">
                <h4 className="fw-700 text-light font-xsss ls-3 text-uppercase mb-0 mt-0">
                  Reviews
                </h4>
              </div>
            </div>
          </div>
          <div
            onClick={() =>
              navigate('/dashboard/student/recommendation-letters')
            }
            className="cursor-pointer col-xl-4 col-lg-12 mt-4 mt-xl-0"
          >
            <div className="card w-100 border bg-primary overflow-hidden">
              <div className="card-body">
                <h4 className="fw-700 text-light font-xsss ls-3 text-uppercase mb-0 mt-0">
                  Recommendation Letters
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 d-flex">
          <div className="card mb-4 d-block w-100 shadow-xss rounded-lg p-xxl-5 p-4 border-0 text-center">
            <Calendar
              defaultDate={defaultDate}
              defaultView={Views.MONTH}
              events={tasks}
              localizer={localizer}
              onSelectEvent={handleSelectEvent}
              popup
              scrollToTime={scrollToTime}
              style={{ height: 600 }}
              views={[Views.MONTH]}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageStudent
