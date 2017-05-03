'use strict'

import accounting from 'accounting'
import React from 'react'
import IpQuestions from '../components/questions.jsx'
import IpAnswer from '../components/answer.jsx'
import IpSection from '../components/section.jsx'

const initialState = {
  age: 0,
  salary: 0,
  location: '',
  phase: 1,
  result: ''
}

export default class IpThreeQuestions extends React.Component {
  constructor (props) {
    super(props)

    this.state = initialState
    this.crunchNumbers = this.crunchNumbers.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleAgeChange = this.handleAgeChange.bind(this)
    this.handleSalaryChange = this.handleSalaryChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  crunchNumbers () {
    this.setState({
      result: {
        from: {
          gross: 2756,
          net: 2345
        },
        to: {
          gross: 2121,
          net: 1845
        }
      }
    })
  }

  submit () {
    this.setState({ phase: 2 })
    setTimeout(this.crunchNumbers, 3000)
  }

  handleReset () {
    this.setState(initialState)
  }

  handleAgeChange (event) {
    const { salary, location } = this.state
    const { value } = event.target

    this.setState({
      age: value,
      submitReady: value && salary && location
    })
  }

  handleSalaryChange (event) {
    const { age, location } = this.state
    const { value } = event.target

    this.setState({
      salary: value,
      formattedSalary: accounting.formatMoney(value, '$', 0),
      submitReady: age && value && location
    })
  }

  handleLocationChange (event) {
    const { age, salary } = this.state
    const { value } = event.target

    this.setState({
      location: value,
      submitReady: age && salary && value
    })
  }

  render () {
    return (
      <div className='ip-full-h ip-relative'>
        <a className='ip-link ip-link--reset' href='javascript:void(0)' onClick={this.handleReset}>
          <i className='fa fa-refresh ip-mrs' />
          Reset
        </a>
        <IpSection>
          <div className='ip-title ip-mtl'>
            Wealth Builder
          </div>
          <div className='ip-title ip-title--sub'>
            Let's calculate your retirement income with just 3 questions!
          </div>
        </IpSection>
        <IpSection>
          <IpQuestions
            state={this.state}
            ageChangeHandler={this.handleAgeChange}
            salaryChangeHandler={this.handleSalaryChange}
            locationChangeHandler={this.handleLocationChange} />
          {this.state.phase === 1 && <div className='ip-align-center ip-mtl'>
            <button className={`ip-button ${!this.state.submitReady ? 'ip-disabled' : ''}`}
              onClick={this.submit}>
              Go!
            </button>
          </div>}
        </IpSection>
        <IpSection>
          <IpAnswer state={this.state} />
        </IpSection>
      </div>
    )
  }
}
