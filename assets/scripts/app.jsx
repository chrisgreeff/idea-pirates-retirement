'use strict'

import accounting from 'accounting'
import React from 'react'
import IpQuestions from './components/questions.jsx'
import IpAnswer from './components/answer.jsx'
import IpSection from './components/section.jsx'

const initialState = {
  age: 0,
  salary: 0,
  location: '',
  phase: 1,
  result: ''
}

export default class IpApp extends React.Component {
  constructor (props) {
    super(props)

    this.state = initialState
    this.crunchNumbers = this.crunchNumbers.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handlePanelBlur = this.handlePanelBlur.bind(this)
    this.handleAgeChange = this.handleAgeChange.bind(this)
    this.handleSalaryChange = this.handleSalaryChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
  }

  crunchNumbers () {
    this.setState({ result: 'hai' })
  }

  handleReset () {
    this.setState(initialState)
  }

  handlePanelBlur () {
    const { age, salary, location } = this.state

    if (age && salary && location) {
      this.setState({ phase: 2 })
      setTimeout(this.crunchNumbers, 3000)
    }
  }

  handleAgeChange (event) {
    const { value } = event.target

    this.setState({ age: value })
  }

  handleSalaryChange (event) {
    const { value } = event.target

    this.setState({
      salary: value,
      formattedSalary: accounting.formatMoney(value, '$', 0)
    })
  }

  handleLocationChange (event) {
    const { value } = event.target

    this.setState({ location: value })
  }

  render () {
    return (
      <div className='ip-full-h ip-relative'>
        <a className='ip-link ip-link--reset' href='javascript:void(0)' onClick={this.handleReset}>
          <i className='fa fa-refresh ip-mrs' />
          Reset
        </a>
        <IpSection>
          <div className='ip-title ip-mtxl'>
            Retire&#39;o&#39;rama
          </div>
          <div className='ip-title ip-title--sub'>
            Let's calculate your retirement income with just 3 questions!
          </div>
        </IpSection>
        <IpSection>
          <IpQuestions
            state={this.state}
            blurHandler={this.handlePanelBlur}
            ageChangeHandler={this.handleAgeChange}
            salaryChangeHandler={this.handleSalaryChange}
            locationChangeHandler={this.handleLocationChange} />
        </IpSection>
        <IpSection>
          <IpAnswer state={this.state} />
        </IpSection>
      </div>
    )
  }
}
