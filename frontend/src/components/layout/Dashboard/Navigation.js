import { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import notify from '../../../util/notify'
import fetch from '../../../util/fetch'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChatsList, setStats } from '../../../slice/appSlice'

export default function Navigation() {
  const dispatch = useDispatch()
  const location = useLocation()
  const { chatsCount } = useSelector(state => state.app)
  const getUserRole = () => {
    return localStorage.getItem('userRole')
  }
  const userRole = getUserRole()

  const fetchAnalytics = async () => {
    try {
      const { data } = await fetch.get({
        url: '/api/analytics',
      })
      dispatch(setStats(data))
    } catch (error) {
      notify({
        type: 'error',
        message: error.message,
      })
    }
  }

  useEffect(() => {
    fetchAnalytics()
    dispatch(fetchChatsList())
  }, [])

  return (
    <nav className="navigation scroll-bar">
      <div className="container pl-0 pr-0">
        <div className="nav-content">
          <div className="nav-top">
            <Link to="/">
              <i className="feather-package text-success display1-size mr-3 ml-3" />
              <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xl logo-text mb-0">
                Volunteer
              </span>
            </Link>
            <Link className="close-nav d-inline-block d-lg-none">
              <i className="ti-close bg-grey mb-4 btn-round-sm font-xssss fw-700 text-dark ml-auto mr-2" />
            </Link>
          </div>
          <div className="nav-caption fw-600 font-xssss text-grey-500">
            Portal
          </div>
          <ul className="mb-3">
            <li className="logo d-none d-xl-block d-lg-block" />
            <li>
              <NavLink
                to={'/dashboard/' + userRole}
                className={
                  'nav-content-bttn open-font' +
                  location.pathname.indexOf('/dashboard/' + userRole)
                    ? ''
                    : ' active'
                }
                data-tab="favorites"
              >
                <i className="feather-shield mr-3" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="logo d-none d-xl-block d-lg-block" />
          </ul>
          <div className="nav-caption fw-600 font-xssss text-grey-500">
            <span /> Account
          </div>
          <ul className="mb-3">
            <li className="logo d-none d-xl-block d-lg-block" />
            <li>
              <NavLink
                to="/dashboard/settings"
                className={
                  'nav-content-bttn open-font h-auto pt-2 pb-2' +
                  location.pathname.indexOf('/dashboard/settings')
                    ? ''
                    : ' active'
                }
              >
                <i className="font-sm feather-settings mr-3" />
                <span>Settings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/messages"
                className={
                  'nav-content-bttn open-font h-auto pt-2 pb-2' +
                  location.pathname.indexOf('/dashboard/messages')
                    ? ''
                    : ' active'
                }
              >
                <i className="font-sm feather-message-square mr-3" />
                <span>Chat</span>
                {chatsCount > 0 && (
                  <span className="circle-count bg-warning mt-2">
                    {chatsCount}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
