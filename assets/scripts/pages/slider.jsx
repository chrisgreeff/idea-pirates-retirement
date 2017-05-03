'use strict'

import React from 'react'
import IpSection from '../components/section.jsx'

export default class IpSlider extends React.Component {
  componentDidMount () {
    const sliderNode = $('.ip-slider')

    sliderNode.slider({
      min: 2017,
      max: 2092,
      values: [2017, 2060, 2075, 2092]
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
      const node = $(el)
      let copy

      if (index === 0) {
        copy = 'Working'
      } else if (index === 1) {
        copy = 'Semi Retired'
      } else if (index === 2) {
        copy = 'Active Retirement'
      } else {
        copy = 'Old Age'
      }

      node.append(`<div class="ip-slider-handle-label">${copy}</div>`)
    })
  }

  render () {
    // @TODO Add a select dropdown that allows the user to select their current life phase. (This should remove all
    // handles prior to the selected stage)
    return (
      <div className='ip-full-h ip-relative'>
        <IpSection>
          <div className='ip-mtxl'>
            <div className='ip-slider' />
          </div>
        </IpSection>
      </div>
    )
  }
}
