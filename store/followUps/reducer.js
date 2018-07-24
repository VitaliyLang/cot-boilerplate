import Immutable from 'seamless-immutable'
import * as types from './actionTypes'

const defaultStore = Immutable({
  error: null,
  items: []
})

export default function (store = defaultStore, action) {
  switch (action.type) {
    case types.LOAD_FOLLOW_UPS:
      if (!action.loaded) {
        return Immutable.set(store, 'error', 'Failed to fetch')
      } else {
        return Immutable.set(store, 'items', action.followUps)
      }
      default:
        return store
  }
}
