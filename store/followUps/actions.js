import fetchApi from '../../lib/fetchApi'
import * as types from './actionTypes'

const loadFollowUps = (followUps, loaded = true) => ({ type: types.LOAD_FOLLOW_UPS, followUps, loaded })

export const fetchFollowUps = () => {
  return async (dispatch) => {
    try {
      const followUps = await fetchApi(true, '/customers')
      dispatch(loadFollowUps(followUps))
    } catch (e) {
      dispatch(loadFollowUps(null, false))
    }
  }
}

const setComplete = (id, complete) => ({
  type: types.SET_COMPLETE, complete, id
})

export const fetchSetComplete = (id, complete) => {
  return async (dispatch) => {
    await fetchApi(false, `/customers/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ complete })
    })
    dispatch(setComplete(id, complete))
  }
}

const clearComplete = () => ({
  type: types.CLEAR_COMPLETE
})

export const fetchClearComplete = () => {
  return async (dispatch) => {
    // TODO: add call to api
    dispatch(clearComplete())
  }
}
