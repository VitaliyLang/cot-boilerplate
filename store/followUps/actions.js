import fetchApi from '../../lib/fetchApi'
import * as types from './actionTypes'

const loadFollowUps = (followUps, loaded = true) => ({ type: types.LOAD_FOLLOW_UPS, followUps, loaded })

export const fetchFollowUps = () => {
  return async (dispatch) => {
    try {
      const followUps = await fetchApi('/customers')
      dispatch(loadFollowUps(followUps))
    } catch (e) {
      dispatch(loadFollowUps(null, false))
    }
  }
}
