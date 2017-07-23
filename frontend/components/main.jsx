import React from 'react'
import FeedContainer from './feed_container'
import ExpenseForm from './expense_form'
import Report from './report'
import _ from 'lodash'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      Signed in as { this.props.user.email }.
      <button onClick={ this.props.logout}>Logout</button>

      <h1>Expenses</h1>
      <FeedContainer expenses={this.props.user.expenses} editable={true}/>
      <ExpenseForm createExpense={this.props.createExpense}/>
      <Report/>
    </div>
  }
}
