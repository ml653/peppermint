import React from 'react'
import { generateReport } from 'Util/api_util'
import FeedContainer from './feed_container'

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.newReport = {
      start_date: '',
      end_date: '',
    }

    this.state = {
      params: this.newReport,
      report: {}
    }

    this.updateField = this.updateField.bind(this)
    this.generateReport = this.generateReport.bind(this)
  }

  generateReport(e) {
    e.preventDefault()
    generateReport(
      new Date(this.state.params.start_date.replace(/-/, '-')).getTime(),
      new Date(this.state.params.end_date.replace(/-/, '-')).getTime())
    .then(result => {
      console.log(result)
      this.setState({ report: result })
    })
  }

  updateField(field) {
    return e => {
      e.preventDefault()
      this.setState({
        params: {
          ...this.state.params,
          [field]: e.currentTarget.value
        }
      })
    }
  }

  render() {
    return <div>
      <form onSubmit={this.generateReport}>
        <h2>Generate Report</h2>
        <input type='date'
          required
          value={this.state.start_date}
          onChange={this.updateField('start_date')}/>
        <input type='date'
          required
          value={this.state.end_date}
          onChange={this.updateField('end_date')}/>
        <input type='submit' value='Generate'/>
      </form>

      <h4>Amount spent ($): {this.state.report.sum}</h4>
      <FeedContainer expenses={ this.state.report.expenses } editable={false}/>
    </div>
  }
}
