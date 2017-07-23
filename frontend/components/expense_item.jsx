import React from 'react'

export default class ExpenseItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: this.props.expense.user_id === this.props.user.id,
      expense: {
        ...this.props.expense,
        date: this.parseDate(this.props.expense.date)
      }
    }

    this.delete = this.delete.bind(this)
    this.save = this.save.bind(this)
    this.updateField = this.updateField.bind(this)
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

  save() {
    const date = new Date(this.state.expense.date)
    this.props.updateExpense({
      ...this.state.expense,
      date: date.toISOString()
    })
  }

  delete(id) {
    return () => {
      this.props.deleteExpense(id)
    }
  }

  parseDate(dateStr) {
    let [m, d, y] = new Date(dateStr)
      .toLocaleDateString()
      .split('/')
    return `${y}/${'00'.slice(m.length) + m}/${'00'.slice(d.length) + d}`
  }

  render() {
    if (this.state.editable) {
      return <tr>
        <td>
          {this.state.expense.email}
        </td>
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
        <td>{<button  onClick={this.save}>Save</button>}</td>
        <td>{this.state.editable && <button
          onClick={this.delete(this.state.expense.id)}>
          Delete
          </button>}
        </td>
      </tr>
    } else {
      return <tr>
        <td>{this.state.expense.user_email} {this.state.expense.id}</td>
        <td>{this.state.expense.description}</td>
        <td>{this.state.expense.date}</td>
        <td>{this.state.expense.amount}</td>
      </tr>
    }
  }
}
