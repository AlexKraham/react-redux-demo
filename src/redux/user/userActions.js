import axios from 'axios'
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './userTypes'

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  }
}

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  }
}

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const users = res.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch((err) => {
        const errMsg = err.message
        dispatch(fetchUsersFailure(errMsg))
      })
  }
}
