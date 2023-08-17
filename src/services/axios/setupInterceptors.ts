import { Axios, AxiosError } from 'axios'

import { getCookie } from '@/utils'
import { COOKIES } from '@/constants'

const setupInterceptors = (axiosInstance: Axios) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getCookie(COOKIES.accessToken)
      if (token) {
        config.headers.set('Authorization', `Bearer ${token}`)
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  axiosInstance.interceptors.response.use(
    (res) => res,
    (error: AxiosError) => {
      const { status, data } = error.response!
      switch (status) {
        case 400:
          console.error(data)
          break

        case 401:
          // Redirect to login page / Request refresh token
          console.error('unauthorised')
          break

        case 404:
          console.error('/not-found')
          break

        case 500:
          console.error('/server-error')
          break

        default:
          return Promise.reject(error)
      }
      return Promise.reject(error)
    }
  )
}

export default setupInterceptors
