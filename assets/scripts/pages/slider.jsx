'use strict'

import React from 'react'
import IpSection from '../components/section.jsx'

export default class IpSlider extends React.Component {
  constructor (props) {
    super(props)

    this.renderSlider = this.renderSlider.bind(this)
    this.onCurrentPhaseChange = this.onCurrentPhaseChange.bind(this)
  }

  componentDidMount () {
    this.renderSlider('working')
  }

  renderSlider (currentPhase) {
    const sliderNode = $('.ip-slider')
    let values
    let labels

    if (currentPhase === 'working') {
      values = [2017, 2065, 2075, 2085, 2095]
      labels = ['Working', 'Semi Retired', 'Active Retirement', 'Less Active Retirement', 'Old Age']
    } else if (currentPhase === 'semi-retired') {
      values = [2065, 2075, 2085, 2095]
      labels = ['Semi Retired', 'Active Retirement', 'Less Active Retirement', 'Old Age']
    } else if (currentPhase === 'active-retirement') {
      values = [2075, 2085, 2095]
      labels = ['Active Retirement', 'Less Active Retirement', 'Old Age']
    } else if (currentPhase === 'less-active-retirement') {
      values = [2085, 2095]
      labels = ['Less Active Retirement', 'Old Age']
    } else {
      values = [2095]
      labels = ['Old Age']
    }

    sliderNode.slider({
      min: 2017,
      max: 2095,
      values
    }).slider('float').slider('pips').on('slidechange', (e, { handle, handleIndex, value, values }) => {
      if (values.length === 1) { return }

      if (handleIndex === 0) {
        if (value > values[1]) {
          sliderNode.slider('values', handleIndex, values[1])
        }
      } else if (handleIndex > 0 && handleIndex < values.length - 1) {
        if (value > values[handleIndex + 1]) {
          sliderNode.slider('values', handleIndex, values[handleIndex + 1])
        } else if (value < values[handleIndex - 1]) {
          sliderNode.slider('values', handleIndex, values[handleIndex - 1])
        }
      } else {
        if (value < values[handleIndex - 1]) {
          sliderNode.slider('values', handleIndex, values[handleIndex - 1])
        }
      }
    })

    $('.ui-slider-handle').each((index, el) => {
      $(el).append(`<div class="ip-slider-handle-label">${labels[index]}</div>`)
    })
  }

  onCurrentPhaseChange (event) {
    const value = event.target.value
    const sliderNode = $('.ip-slider')

    sliderNode.slider('destroy')
    this.renderSlider(value)
  }

  render () {
    return (
      <IpSection>
        <div className='ip-flex'>
          <div className='ip-field'>
            <div className='ip-label'>Current Phase</div>
            <div className='ip-value'>
              <select className='ip-select' onChange={this.onCurrentPhaseChange}>
                <option value='working'>Working</option>
                <option value='semi-retired'>Semi Retired</option>
                <option value='active-retirement'>Active Retirement</option>
                <option value='less-active-retirement'>Less Active Retirement</option>
                <option value='old-age'>Old Age</option>
              </select>
            </div>
          </div>
        </div>
        <div className='ip-mtxl'>
          <div className='ip-slider' />
        </div>
      </IpSection>
    )
  }
}
