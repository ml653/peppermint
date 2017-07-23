import * as ApiUtil from '../util/api_util'
export const RECEIVE_USER = 'RECEIVE_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const logoutUser = () => ({
  type: LOGOUT_USER
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const signup = user => dispatch => (
  ApiUtil.signup(user)
    .done(user => {
      dispatch(receiveUser(user))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
)

export const login = user => dispatch => (
  ApiUtil.login(user)
    .done(user => {
      dispatch(receiveUser(user))
      dispatch(clearErrors())
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
)

export const logout = () => dispatch => (
  ApiUtil.logout()
    .then(_user => dispatch(logoutUser()))
)
