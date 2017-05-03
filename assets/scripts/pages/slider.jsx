'use strict'

import React from 'react'
import IpSection from '../components/section.jsx'

export default class IpSlider extends React.Component {
  componentDidMount () {
    $('.ip-slider').slider({
      max: 1000,
      values: [0, 300, 700, 1000]
    }).on('slidechange', (e, ui) => {
      console.log(e)
      console.log(ui)
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
    return (
      <div className='ip-full-h ip-relative'>
        <IpSection>
          <div className='ip-slider' />
        </IpSection>
      </div>
    )
  }
}
