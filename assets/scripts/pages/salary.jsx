'use strict'

import React from 'react'
import { browserHistory } from 'react-router'
import IpNav from '../components/nav'
import IpSection from '../components/section'
import APP_ACTIONS from '../constants/app-actions'

export default class Salary extends React.Component {
  constructor (props) {
    const { appStore } = window

    super(props)

    this.state = { value: appStore.getState().salary || '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const { appStore } = window
    const value = event.target.value

    appStore.dispatch({ type: APP_ACTIONS.setSalary, value })
    this.setState({ value })
  }

  handleSubmit (event) {
    browserHistory.push('/location')

    event.preventDefault()
  }

  render () {
    return (
      <div className='ip-page'>
        <div>
          <IpSection>
            <form className='ip-flex ip-flex--align-end' onSubmit={this.handleSubmit}>
              <div className='ip-field'>
                <div className='ip-label'>Tell us your salary...</div>
                <div className='ip-value'>
                  <input className='ip-input'
                    value={this.state.value}
                    onChange={this.handleChange}
                    type='number' />
                </div>
              </div>
              <button className='ip-next-button ip-mlm'>
                <i className='fa fa-arrow-right' />
              </button>
            </form>
          </IpSection>
          <IpNav />
        </div>
      </div>
    )
  }
}
