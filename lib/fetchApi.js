import fetch from 'isomorphic-unfetch'
import { apiBaseUrl } from '../constants'

export default async function fetchApi(isParseRequired, url, options) {
  const res = await fetch(`${apiBaseUrl}${url}`, options)
  return isParseRequired ? await res.json() : res
}
