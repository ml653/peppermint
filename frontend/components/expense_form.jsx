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
    this.save = this.save.bind(this)
  }

  save() {
    const date = new Date(this.state.expense.date)
    this.props.createExpense({
      ...this.state.expense,
      date: date.toISOString()
    })
    .then(_ => this.setState({ expense: this.newExpense }))
  }

  updateField(field) {
    return e => {
      this.setState({
        expense: {
          ...this.state.expense,
          [field]: e.currentTarget.value
        }
      })
    }
  }

  parseDate(dateStr) {
    let [m, d, y] = new Date(dateStr)
      .toLocaleDateString()
      .split('/')
    return `${y}/${'00'.slice(m.length) + m}/${'00'.slice(d.length) + d}`
  }

  render() {
    return <tr>
      <td>New Expense</td>
      <td>
        <input type='text'
          value={this.state.expense.description}
          onChange={this.updateField('description')}/>
      </td>
      <td>
        <input type='text'
          value={this.state.expense.date}
          onChange={this.updateField('date')}/>
      </td>
      <td>
        <input type='number'
          value={this.state.expense.amount}
          onChange={this.updateField('amount')}
          step="0.01"/>
      </td>
      <td>{<button  onClick={this.save}>Create</button>}</td>
    </tr>
  }
}
