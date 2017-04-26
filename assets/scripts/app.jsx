'use strict'

import accounting from 'accounting'
import React from 'react'
import IpQuestionPanel from './components/question-panel.jsx'
import IpSection from './components/section.jsx'

export default class IpApp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      age: 0,
      salary: 0,
      location: '',
      phase: 1
    }

    this.handlePanelBlur = this.handlePanelBlur.bind(this)
    this.handleAgeChange = this.handleAgeChange.bind(this)
    this.handleSalaryChange = this.handleSalaryChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
  }

  handlePanelBlur () {
    const { age, salary, location } = this.state

    if (age && salary && location) {
      this.setState({ phase: 2 })
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
      <div>
        <IpSection>
          <div className='ip-title ip-mtxl'>
            Retire&#39;o&#39;rama
          </div>
          <div className='ip-title ip-title--sub'>
            Let's calculate your retirement income with just 3 questions!
          </div>
        </IpSection>
        <IpSection>
          <div className='ip-flex'>
            <IpQuestionPanel className='ip-mrxl'
              title='What&#39;s your age?'
              subTitle='We need to know how long you&#39;ve for until retirement kicks in.'
              suffix='years'
              index={1}
              phase={this.state.phase}
              phase2Content='years old'
              imgPath='/images/age.png'
              blurHandler={this.handlePanelBlur}
              changeHandler={this.handleAgeChange}
              value={this.state.age} />
            <IpQuestionPanel className='ip-mrxl'
              title='What&#39;s your average annual income?'
              subTitle='We need to know how much money is coming into the bank.'
              prefix='$'
              suffix='annually'
              index={2}
              phase={this.state.phase}
              phase2Content='annually'
              imgPath='/images/salary.png'
              blurHandler={this.handlePanelBlur}
              changeHandler={this.handleSalaryChange}
              value={this.state.salary}
              formattedValue={this.state.formattedSalary} />
            <IpQuestionPanel className='ip-mrxl'
              title='Where do you live?'
              subTitle='We are able to calculate an approximation of your expenditure based on your location.'
              index={3}
              phase={this.state.phase}
              imgPath='/images/location.png'
              blurHandler={this.handlePanelBlur}
              changeHandler={this.handleLocationChange}
              value={this.state.location} />
          </div>
        </IpSection>
      </div>
    )
  }
}
