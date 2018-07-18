import * as types from './actionTypes'

export const login = dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({
      type: types.LOGIN_COMPLETED,
      payload: data 
    }))
}
