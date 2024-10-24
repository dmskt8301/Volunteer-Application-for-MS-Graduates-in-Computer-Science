import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AuthLayout from './layout/Auth/AuthLayout'
import DashLayout from './layout/Dashboard/DashLayout'
import Admin from './pages/dashboard/admin/Admin'
import Professor from './pages/dashboard/professor/Professor'
import Student from './pages/dashboard/student/Student'
import Messages from './pages/dashboard/Messages'
import ForgotPassword from './pages/auth/ForgotPassword'
import AccountInformation from './pages/dashboard/settings/AccountInformation'
import SettingsLayout from './layout/Dashboard/SettingsLayout'
import Settings from './pages/dashboard/settings/Settings'
import Password from './pages/dashboard/settings/Password'
import ManageTasks from './pages/dashboard/admin/ManageTasks'
import Reports from './pages/dashboard/admin/Reports'
import Reviews from './pages/dashboard/admin/Reviews'
import ManageAdmin from './pages/dashboard/admin/ManageAdmin'
import ManageUsers from './pages/dashboard/admin/ManageUsers'
import Blog from './pages/Blog'
import ManageProfessor from './pages/dashboard/professor/ManageProfessor'
import AssignTasks from './pages/dashboard/professor/AssignTasks'
import ManageStudent from './pages/dashboard/student/ManageStudent'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React from 'react'
import fetch from '../util/fetch'
import Cookies from 'js-cookie'
import notify from '../util/notify'
import VerifyMail from './pages/auth/VerifyMail'
import ResetPassword from './pages/auth/ResetPassword'
import RecommendationLetters from './pages/dashboard/admin/RecommendationLetters'

export const fetchToken = () => {
  fetch.get({ url: '/sanctum/csrf-cookie' })
}

const loginRedirection = () => {
  window.location.href = '/auth/login'
  Cookies.remove('XSRF-TOKEN')
}

export const logout = async () => {
  localStorage.clear()
  try {
    await fetch.post({
      url: '/logout',
    })
    loginRedirection()
  } catch (error) {
    loginRedirection()
    notify({
      type: 'error',
      message: error.message || 'Logout failed',
    })
  }
}

export default function App() {
  React.useEffect(() => {
    if (!Cookies.get('XSRF-TOKEN')) fetchToken()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="verify-email/:userId/:token" element={<VerifyMail />} />
          <Route path="password-reset/:token" element={<ResetPassword />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="/dashboard" element={<DashLayout />}>
          <Route path="admin" element={<Admin />}>
            <Route index element={<ManageAdmin />} />
            <Route
              path="manage-professors"
              element={<ManageUsers manage="Professor" />}
            />
            <Route
              path="manage-tasks"
              element={<ManageTasks title="Manage Tasks" role="Professor" />}
            />
            <Route path="reviews-and-feedback" element={<Reviews />} />
            <Route
              path="manage-students"
              element={<ManageUsers manage="Student" />}
            />
            <Route
              path="manage-student-tasks"
              element={
                <ManageTasks title="Manage Student Tasks" role="Student" />
              }
            />
            <Route path="weekly-reports" element={<Reports source="admin" />} />
          </Route>
          <Route path="professor" element={<Professor />}>
            <Route index element={<ManageProfessor />} />
            <Route
              path="manage-tasks"
              element={<ManageTasks title="Manage Tasks" role="Professor" />}
            />
            <Route path="assign-tasks" element={<AssignTasks />} />
            <Route
              path="weekly-report"
              element={<Reports source="professor" />}
            />
            <Route path="review-and-feedback" element={<Reviews />} />
            <Route
              path="recommendation-letters"
              element={<RecommendationLetters source="professor" />}
            />
          </Route>
          <Route path="student" element={<Student />}>
            <Route index element={<ManageStudent />} />
            <Route
              path="manage-task"
              element={<ManageTasks title="Manage Tasks" role="student" />}
            />
            <Route
              path="review-and-feedback"
              element={<Reviews source="student" />}
            />
            <Route
              path="recommendation-letters"
              element={<RecommendationLetters source="student" />}
            />
          </Route>
          <Route path="settings" element={<SettingsLayout />}>
            <Route index element={<Settings />} />
            <Route
              path="account-information"
              element={<AccountInformation />}
            />
            <Route path="password" element={<Password />} />
          </Route>
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}
