import { Link } from 'react-router-dom'
import ApexCharts from 'react-apexcharts'
import { useSelector } from 'react-redux'

function ManageAdmin() {
  const borderColor = '#E4E4E4'

  const { stats } = useSelector(state => state.app)
  const studentOptions = setBarChartOptions(borderColor)
  const tasksOptions = setBarChartOptions(borderColor)
  const reportsSubmittedOptions = setBarChartOptions(borderColor)

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
        enabled: false
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

  const studentSeries = [
    {
      name: 'Students',
      data: Array.from({ length: 5 }, () => Math.ceil(25 + Math.random() * 100)),
    },
  ]
  const taskSeries = [
    {
      name: 'Tasks',
      data: Array.from({ length: 5 }, () => Math.ceil(25 + Math.random() * 100)),
    },
  ]
  const reportSeries = [
    {
      name: 'Reports',
      data: Array.from({ length: 5 }, () => Math.ceil(25 + Math.random() * 100)),
    },
  ]

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
                        {stats.students}
                      </h2>
                      <h4 className="fw-700 text-grey-500 font-xsssss ls-3 text-uppercase mb-0 mt-0">
                        Students
                      </h4>
                    </div>
                    <div className="col-5 text-left">
                      <ApexCharts
                        options={studentOptions}
                        series={studentSeries}
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
                        {stats.tasks}
                      </h2>
                      <h4 className="fw-700 text-grey-500 font-xsssss ls-3 text-uppercase mb-0 mt-0">
                        Tasks
                      </h4>
                    </div>
                    <div className="col-5 text-left">
                      <ApexCharts
                        options={tasksOptions}
                        series={taskSeries}
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
                        options={reportsSubmittedOptions}
                        series={reportSeries}
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
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
          <div className="card mb-4 d-block w-100 shadow-xss rounded-lg p-xxl-5 p-4 border-0 text-center">
            <h4 className="fw-700 font-xs">Professors</h4>
            <div className="clearfix" />
            <Link
              to="/dashboard/admin/manage-professors"
              className="p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current"
            >
              Manage Professors
            </Link>
            <Link
              to="/dashboard/admin/manage-tasks"
              className="p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current"
            >
              Manage Tasks
            </Link>
            <Link
              to="/dashboard/admin/reviews-and-feedback"
              className="p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current"
            >
              Reviews & Feedback
            </Link>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
          <div className="card mb-4 d-block w-100 shadow-xss rounded-lg p-xxl-5 p-4 border-0 text-center">
            <h4 className="fw-700 font-xs">Students</h4>
            <div className="clearfix" />
            <Link
              to="/dashboard/admin/manage-students"
              className="p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current"
            >
              Manage Students
            </Link>
            <Link
              to="/dashboard/admin/manage-student-tasks"
              className="p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current"
            >
              Manage Student Tasks
            </Link>
            <Link
              to="/dashboard/admin/weekly-reports"
              className="p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current"
            >
              Weekly Reports
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageAdmin
