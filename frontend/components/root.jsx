import React from 'react'
import MainContainer from './main_container.js'
import LoginContainer from './login_container'

import { Provider } from 'react-redux'
import { Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from 'Util/route_util'

class Root extends React.Component {
  render() {
    return <Provider store={this.props.store}>
        <HashRouter>
          <Switch>
            <AuthRoute path='/login' component={LoginContainer}/>
            <ProtectedRoute path='/' component={MainContainer}/>
          </Switch>
        </HashRouter>
      </Provider>
  }
}

export default Root
