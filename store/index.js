import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import auth from './auth/reducer'

const reducers = {
  auth: auth
  // ..other reducers here
}

export const initStore = initialState => {
  return createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
