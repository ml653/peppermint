import { connect } from 'react-redux'
import Feed from './feed'
import { createExpense, updateExpense, deleteExpense } from '../actions/expense_actions'

const mapStateToProps = (store) => ({
  user: store.session.user,
})

export default connect(
  mapStateToProps,
  { createExpense, updateExpense, deleteExpense }
)(Feed)
