import * as SessionActions from 'Actions/session_actions'
import * as ExpenseActions from 'Actions/expense_actions'
import merge from 'lodash/merge'

const defaultState = {
  user: {},
  errors: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
  case SessionActions.RECEIVE_USER:
    return merge({}, state, { user: action.user })

  case SessionActions.LOGOUT_USER:
    return defaultState

  case SessionActions.RECEIVE_ERRORS:
    return merge({}, state, { errors: action.errors })

  case SessionActions.CLEAR_ERRORS:
    return merge({}, state, { errors: [] })

  case ExpenseActions.RECEIVE_EXPENSE: {
    const newState =  merge({}, state)
    newState.user.expenses[action.expense.id] = action.expense
    return newState
  }

  case ExpenseActions.REMOVE_EXPENSE: {
    const newState = merge({}, state)
    delete newState.user.expenses[action.id]
    return newState
  }

  default:
    return state
  }
}
