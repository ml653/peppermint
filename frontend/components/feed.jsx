import React from 'react'
import ExpenseItem from './expense_item.jsx'
import { values } from 'lodash'

export default class ExpensesFeed extends React.Component {
  render() {
    const expensesItems = _
      .values(this.props.expenses)
      .map((n, i) => {
      return <ExpenseItem
        // If the user is permitted to edit, only permits them to edit their own expenses
        editable={this.props.editable ? this.props.user.id == n.user_id : false }
        key={n.id}
        expense={n}
        user={this.props.user}
        updateExpense={this.props.updateExpense}
        deleteExpense={this.props.deleteExpense}/>
    })

    return <table>
      <tbody>
        <tr>
          <th>Email:</th>
          <th>Description:</th>
          <th>Date (m/d/y):</th>
          <th>Amount ($):</th>
        </tr>
        {expensesItems}
      </tbody>
    </table>
  }
}
