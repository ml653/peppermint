import * as ApiUtil from '../util/api_util'
export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSE'
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE'

export const receiveExpense = expense => ({
  type: RECEIVE_EXPENSE,
  expense
})

export const removeExpense = id => ({
  type: REMOVE_EXPENSE,
  id
})

export const createExpense = expense => dispatch => (
  ApiUtil.createExpense(expense)
    .done(expense => dispatch(receiveExpense(expense)) )
    .fail(err => console.log(err.responseJSON))
)

export const updateExpense = expense => dispatch => (
  ApiUtil.updateExpense(expense)
    .done(expense => dispatch(receiveExpense(expense)))
    .fail(err => console.log(err.responseJSON))
)

export const deleteExpense = id => dispatch => {
  ApiUtil.deleteExpense(id)
    .done(expense => dispatch(removeExpense(expense.id)))
    .fail(err => console.log(err.responseJSON))
}
