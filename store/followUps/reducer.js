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
        return Immutable.set(store, 'error', 'Failed to fetch follow ups.')
      } else {
        return Immutable.set(store, 'items', action.followUps)
      }
    case types.SET_COMPLETE:
      const itemIdx = store.items.findIndex(item => item.id === action.id)
      return Immutable.setIn(store, ['items', itemIdx, 'complete'], action.complete)
    case types.CLEAR_COMPLETE:
      const incomplete = store.items.filter(item => item.complete === false)
      return Immutable.merge(store, {items: incomplete} )
    default:
      return store
  }
}
