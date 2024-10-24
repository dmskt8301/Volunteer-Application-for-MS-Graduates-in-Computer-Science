import axios from 'axios'

import notify from './notify'
import { logout } from '../components/App'
export const BASE_API_URL = 'http://localhost:8000'
export const CAPTCHA_SITE_KEY = '6Lekt7kpAAAAAM09h1kS0TMfaIR-AAIrsuOQgGIW'

async function axiosConfig({
  headers = {
    Authorization: '',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  baseURL = BASE_API_URL,
  method = 'GET',
  data,
  url = '',
  file,
  params,
  withCredentials = true,
  withXSRFToken = true,
}) {
  try {
    const fileFormData = new FormData()
    let payloadData = data

    if (file) {
      payloadData = fileFormData.append('file', file)
    }

    const response = await axios({
      method,
      url,
      headers,
      data: payloadData,
      baseURL,
      withCredentials,
      params,
      withXSRFToken,
    })

    return response
  } catch (e) {
    if (
      e.response?.status === 401 &&
      !['/auth/login', '/auth/register'].includes(window.location.pathname)
    ) {
      notify({
        type: 'error',
        message: 'Session Expired. Please login again to continue.',
      })
      setTimeout(() => {
        logout()
      }, 1000)
    }
    throw e.response.data || 'Something went wrong'
  }
}

const fetch = {
  get: params => axiosConfig({ method: 'GET', ...params }),
  post: params => axiosConfig({ method: 'POST', ...params }),
  put: params => axiosConfig({ method: 'PUT', ...params }),
  patch: params => axiosConfig({ method: 'PATCH', ...params }),
  delete: params => axiosConfig({ method: 'DELETE', ...params }),
}

export default fetch
