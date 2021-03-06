'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import IpQuestionPanel from './question-panel.jsx'

export default class IpQuestions extends React.Component {
  render () {
    const { ageChangeHandler, locationChangeHandler, salaryChangeHandler, state } = this.props

    return (
      <div className='ip-flex'>
        <IpQuestionPanel className='ip-mrxl'
          title='How young are you?'
          subTitle='We need to know how long you&#39;ve for until retirement kicks in.'
          suffix='years'
          index={1}
          phase={state.phase}
          phase2Content='years old'
          imgPath='/images/age.png'
          changeHandler={ageChangeHandler}
          value={state.age} />
        <IpQuestionPanel className='ip-mrxl ip-panel--middle'
          title='What&#39;s your average annual income?'
          subTitle='We need to know how much money is coming into the bank.'
          prefix='$'
          suffix='per year'
          index={2}
          phase={state.phase}
          phase2Content='annually'
          imgPath='/images/salary.png'
          changeHandler={salaryChangeHandler}
          value={state.salary}
          formattedValue={state.formattedSalary} />
        <IpQuestionPanel
          title='Where do you live?'
          subTitle='We are able to calculate an approximation of your expenditure based on your location.'
          index={3}
          phase={state.phase}
          imgPath='/images/location.png'
          changeHandler={locationChangeHandler}
          textType='text'
          value={state.location} />
      </div>
    )
  }
}

IpQuestions.propTypes = {
  ageChangeHandler: PropTypes.func.isRequired,
  locationChangeHandler: PropTypes.func.isRequired,
  salaryChangeHandler: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
}
