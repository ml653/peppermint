import React from 'react'
import Main from './main.jsx'

import { Provider } from 'react-redux'
import { Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from 'Util/route_util'

class Root extends React.Component {
  render() {
    return <Provider store={this.props.store}>
        <HashRouter>
          <Switch>
            <AuthRoute path='/' component={Main}/>
          </Switch>
        </HashRouter>
      </Provider>
  }
}

export default Root
