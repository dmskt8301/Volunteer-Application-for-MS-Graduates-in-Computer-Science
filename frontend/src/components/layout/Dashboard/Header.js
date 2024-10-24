import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import Avatar from '../../../common/Avatar'

export default function Header() {
  const location = useLocation()
  const { appUser, chatsCount } = useSelector(state => state.app)

  return (
    <div className="middle-sidebar-header bg-white">
      <button className="header-menu" />
      <ul className="d-flex ml-auto right-menu-icon">
        <li className='mt-1'>
          <Link to="/dashboard/messages">
            {chatsCount > 0 && (
              <span
                style={{
                  top: -8,
                  right: -8,
                }}
                class="position-absolute text-light  badge rounded-pill bg-warning"
              >
                {chatsCount}
              </span>
            )}
            <i className="feather-message-square font-xl text-current" />
          </Link>
        </li>
        <li className="mt-1">
          <a href={location.pathname}>
            <i className="feather-settings animation-spin d-inline-block font-xl text-current" />
            <div className="menu-dropdown switchcolor-wrap">
              <h4 className="fw-700 font-xs mb-4">Settings</h4>
              <div className="card bg-transparent-card border-0 d-block mt-3">
                <h4 className="d-inline font-xssss mont-font fw-700">
                  Dark Mode
                </h4>
                <div className="d-inline float-right mt-1">
                  <label className="toggle toggle-dark">
                    <input type="checkbox" />
                    <span className="toggle-icon" />
                  </label>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <Link to="/dashboard/settings">
            <Avatar
              img={appUser?.image}
              style={{
                height: '40px',
              }}
              className="w40 "
              size="sm"
            />
          </Link>
        </li>
        <li>
          <Link className="menu-search-icon">
            <i className="feather-search text-grey-900 font-lg" />
          </Link>
        </li>
      </ul>
    </div>
  )
}
