import { connect } from 'react-redux'
import Feed from './feed'
import { createExpense, updateExpense, deleteExpense } from '../actions/expense_actions'

const mapStateToProps = (store, ownProps) => ({
  user: store.session.user,
  expenses: ownProps.expenses,
  editable: ownProps.editable
})

export default connect(
  mapStateToProps,
  { createExpense, updateExpense, deleteExpense }
)(Feed)
