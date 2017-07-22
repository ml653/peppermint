import * as ExpenseActions from 'Actions/expense_actions'
import merge from 'lodash/merge'

const defaultState = {}

export default (state = defaultState, action) => {
  switch (action.type) {

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
