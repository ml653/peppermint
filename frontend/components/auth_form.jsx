import React from 'react'
import { values } from 'lodash'

class AuthForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.updateField = this.updateField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.demo = this.demo.bind(this)
    this.setFieldsWithDelay = this.setFieldsWithDelay.bind(this)
  }

  updateField(field) {
    return e => {
      e.preventDefault()
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    if(this.state.submitType === 'login') {
      this.props.login(this.state)
    } else {
      this.props.signup(this.state)
    }
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

    const errors = values(this.props.errors).map((err, i) => (
      <li key={i}>{err}</li>
    ))
    return(
      <div>
        <div className="auth">
          <div className='auth-form'>
            <form onSubmit={this.handleSubmit}>
              <h1>Welcome to Peppermint</h1>
              <p>Enter your <b>email address</b> and <b>password</b> to signup or login.</p>

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

              <input
                onClick={()=>{this.state.submitType = 'login'}}
                value='Login'
                type='submit'/>

              <input
                onClick={()=>{this.state.submitType = 'signup'}}
                value='Signup'
                type='submit'/>

              <button
                onClick={this.demo}>
                Demo Admin
              </button>
            </form>
              <ul>
              { errors }
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AuthForm
