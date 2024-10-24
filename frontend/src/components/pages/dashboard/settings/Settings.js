import { Link } from 'react-router-dom'
import { logout } from '../../../App'

export default function Settings() {
  return (
    <div className="card-body p-lg-5 p-4 w-100 border-0">
      <div className="row">
        <div className="col-lg-12">
          <h4 className="mb-4 font-lg fw-700 mont-font mb-5">Settings</h4>
          <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">
            General
          </div>
          <ul className="list-inline mb-4">
            <li className="list-inline-item d-block mr-0">
              <Link
                to="/dashboard/settings/account-information"
                className="pt-2 pb-2 d-flex"
              >
                <i className="btn-round-md bg-primary-gradiant text-white feather-home font-md mr-3" />
                <h4 className="fw-600 font-xssss mb-0 mt-3">
                  Account Information
                </h4>
                <i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3" />
              </Link>
            </li>
          </ul>

          <div className="nav-caption fw-600 font-xssss text-grey-500 mb-2">
            Other
          </div>
          <ul className="list-inline">
            <li className="list-inline-item d-block mr-0">
              <Link
                to="/auth/login"
                className="pt-2 pb-2 d-flex"
                onClick={logout}
              >
                <i className="btn-round-md bg-red-gradiant text-white feather-lock font-md mr-3" />
                <h4 className="fw-600 font-xssss mb-0 mt-3">Logout</h4>
                <i className="ti-angle-right font-xsss text-grey-500 ml-auto mt-3" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
