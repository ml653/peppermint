import React from 'react'

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.newExpense = {
      description: '',
      date: '',
      amount: ''
    }

    this.state = {
      expense: this.newExpense
    }

    this.updateField = this.updateField.bind(this)
    this.createExpense = this.createExpense.bind(this)
  }

  createExpense(e) {
    e.preventDefault();
    console.log(this.state.expense)
    const date = new Date(this.state.expense.date)
    this.props.createExpense({
      ...this.state.expense,
      date: date.toISOString()
    })
    .then(_ => {
      alert('Expense created!')
      this.setState({ expense: this.newExpense })
    })
  }

  updateField(field) {
    return e => {
      e.preventDefault();
      this.setState({
        expense: {
          ...this.state.expense,
          [field]: e.currentTarget.value
        }
      })
    }
  }

  render() {
    return <form onSubmit={this.createExpense}>
      <h2>Create Expense</h2>
      <input type='text'
        required
        placeholder='Description'
        value={this.state.expense.description}
        onChange={this.updateField('description')}/>
      <input type='date'
        required
        placeholder='Date'
        value={this.state.expense.date}
        onChange={this.updateField('date')}/>
      <input type='number'
        required
        placeholder='Amount'
        value={this.state.expense.amount}
        onChange={this.updateField('amount')}
        step="0.01"/>
      <input type='submit' value='Create'/>
    </form>
  }
}
