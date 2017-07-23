import React from 'react'
import ExpenseItem from './expense_item.jsx'
import { values } from 'lodash'
import ExpenseForm from './expense_form'

export default class ExpensesFeed extends React.Component {
  render() {
    const expensesItems = _
      .values(this.props.user.expenses)
      .map((n, i) => {
      return <ExpenseItem
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
          <th>Date-yyyy,mm,dd:</th>
          <th>Amount:</th>
        </tr>
        {expensesItems}
        <ExpenseForm createExpense={this.props.createExpense}/>
      </tbody>
    </table>
  }
}
