import { connect } from 'react-redux'
import LoginForm from './login_form.jsx'
import { login } from '../actions/session_actions'

const mapStateToProps = (store) => ({
  user: store.session.user,
  errors: store.session.errors
})

export default connect(
  mapStateToProps,
  { login }
)(LoginForm)
