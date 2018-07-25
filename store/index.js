import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import auth from './auth/reducer'
import followUps from './followUps/reducer'

const reducers = {
  auth,
  followUps
}

export const initStore = initialState => {
  return createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
