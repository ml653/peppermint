import React from 'react'

class LoginForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.updateField = this.updateField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toSignUp = this.toSignUp.bind(this)
    this.demo = this.demo.bind(this)
    this.setFieldsWithDelay = this.setFieldsWithDelay.bind(this)
  }

  updateField(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.login(this.state)
  }

  toSignUp(e) {
    e.preventDefault()
    this.props.history.push('/sign-up')
  }

  demo(e) {
    e.preventDefault()
    this.setFieldsWithDelay('user_1@gmail.com', 'password')
  }

  setFieldsWithDelay(email, password) {
    if(email) {
      this.setState({email: this.state.email + email[0]})
      setTimeout(
        () => {this.setFieldsWithDelay(email.slice(1), password)},
        80)

    } else if(password) {
      this.setState({password: this.state.password + password[0]})
      setTimeout(
        () => {this.setFieldsWithDelay(undefined, password.slice(1))},
        80)

    } else {
      this.props.login(this.state)
    }
  }

  render() {

    return(
      <div>
        <div className="auth">
          <div className='auth-form'>
            <ul>
            </ul>
            <form onSubmit={this.handleSubmit}>
              <h1>Welcome to Peppermint</h1>
              <p>Enter your <b>email address</b> and <b>password</b>.</p>

              <input
                placeholder='email@gmail.com'
                type='email'
                value={this.state.email}
                required
                onChange={this.updateField('email')} />

              <input
                placeholder='password'
                type='password'
                value={this.state.password}
                minLength="6"
                required
                onChange={this.updateField('password')}/>

              <button
                className='sign-in'
                type='submit'
                onSubmit={this.handleSubmit}>
                Sign In
              </button>

              <button
                className='sign-in'
                onClick={this.demo}>
                Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
