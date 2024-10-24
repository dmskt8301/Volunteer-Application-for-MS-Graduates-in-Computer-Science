import React from 'react'
import notify from '../../../util/notify'
import fetch from '../../../util/fetch'
import { logout } from '../../App'

function VerifyMail() {
  const validateEmail = async () => {
    try {
      const { data } = await fetch.get({
        url: '/verify-email/' + window.location.href.split('verify-email/')[1],
      })
      if (data) {
        notify({
          type: 'success',
          message: 'Email verified successfully',
        })

        setTimeout(() => {
          logout()
        }, 3000)
      }
    } catch (error) {
      notify({
        type: 'error',
        message: error.message,
      })
    }
  }

  React.useEffect(() => {
    validateEmail()
  }, [])

  return (
    <div className="row">
      <div
        className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/images/login-bg.jpg)' }}
      />
      <div className="col-xl-7 vh-lg-100  d-flex bg-white rounded-lg overflow-hidden">
        {/* spinner */}
        <div
          className="text-center w-100 p-5"
          style={{
            marginTop: '100px',
          }}
        >
          <div
            className="spinner-border spinner-border text-primary"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <h4 className="mt-4">Verifying Mail, please wait...</h4>
        </div>
      </div>
    </div>
  )
}

export default VerifyMail
