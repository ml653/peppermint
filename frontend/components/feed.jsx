import React from 'react'
import ExpenseItem from './expense_item.jsx'
import { values } from 'lodash'

export default class ExpensesFeed extends React.Component {
  render() {
    console.log(this.props)
    const expensesItems = _
      .values(this.props.expenses)
      .map((n, i) => {
      return <ExpenseItem
        editable={this.props.editable}
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
          <th>Date:</th>
          <th>Amount:</th>
        </tr>
        {expensesItems}
      </tbody>
    </table>
  }
}
