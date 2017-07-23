import { connect } from 'react-redux'
import Main from './main.jsx'
import { logout } from 'Actions/session_actions'
import { createExpense } from 'Actions/expense_actions'

const mapStateToProps = (store) => ({
  user: store.session.user,
})

export default connect(
  mapStateToProps,
  { logout, createExpense }
)(Main)
