import fetch from 'isomorphic-unfetch'
import { apiBaseUrl } from '../constants'

export default async function fetchApi(url, options) {
  const res = await fetch(`${apiBaseUrl}${url}`, options)
  const data = await res.json()
  return data
}
