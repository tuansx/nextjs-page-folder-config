import axios from 'axios'
import setupInterceptors from './setupInterceptors'

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

const axiosClient = axios.create({
  baseURL,
  // timeout: 5000
})

const handleUrl = (url: string) => {
  return `${baseURL}/${url.replace(/^\/+/g, '')}`
}

setupInterceptors(axiosClient)

const get = (url: string, params = {}) => {
  return axiosClient.get(handleUrl(url), { params })
}

const post = (url: string, params = {}) => {
  return axiosClient.post(handleUrl(url), params)
}

const patch = (url: string, params = {}) => {
  return axiosClient.patch(handleUrl(url), params)
}

const put = (url: string, params = {}) => {
  return axiosClient.put(handleUrl(url), params)
}

const del = (url: string, params = {}) => {
  return axiosClient.delete(handleUrl(url), params)
}

const httpClient = {
  get,
  post,
  patch,
  put,
  del,
}

export default httpClient
