import React from 'react'
import FeedContainer from './feed_container'
import _ from 'lodash'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      Signed in as { this.props.user.email }.
      <button onClick={ this.props.logout}>Logout</button>
      <FeedContainer/>
    </div>
  }
}
