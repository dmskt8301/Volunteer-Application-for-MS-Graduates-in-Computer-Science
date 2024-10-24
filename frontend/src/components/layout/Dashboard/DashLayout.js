import { Outlet, useNavigate } from 'react-router-dom'
import Navigation from './Navigation'
import Header from './Header'
import Sidebar from './Sidebar'
import SidebarBtn from './SidebarBtn'
import AppFooter from './AppLayout/AppFooter'
import AppHeader from './AppLayout/AppHeader'

export default function DashLayout() {
  useNavigate()
  return (
    <div>
      <div className="main-wrapper">
        <Navigation />
        <div className="main-content">
          <Header />
          <div
            className="middle-sidebar-bottom bg-lightblue theme-dark-bg"
            style={{
              overflow: 'auto',
            }}
          >
            <Outlet />
            <Sidebar />
            <SidebarBtn />
            <AppFooter />
            <AppHeader />
          </div>
        </div>
      </div>
    </div>
  )
}
