import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import ApiUtil from 'Util/api_util'
import * as sessionActions from 'Actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store
  if (window.peppermint_user) {

    const preloadedState = {
      session: { user: window.peppermint_user, errors: [] },
    }

    store = configureStore(preloadedState)
    delete window.peppermint_user
  } else {
    store = configureStore()
  }

  window.store = store
  window.sessionActions = sessionActions
  window.ApiUtil = ApiUtil

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store}/>, root)
})
