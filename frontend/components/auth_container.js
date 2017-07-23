import { connect } from 'react-redux'
import AuthForm from './auth_form.jsx'
import { login, signup } from '../actions/session_actions'

const mapStateToProps = (store) => ({
  user: store.session.user,
  errors: store.session.errors
})

export default connect(
  mapStateToProps,
  { login, signup }
)(AuthForm)
