'use strict'

import React from 'react'
import IpSpinner from './spinner.jsx'

export default class IpAnswer extends React.Component {
  render () {
    const { state } = this.props

    return (
      <div className='ip-answer'>
        <div className={`ip-panel ip-align-center ip-panel--answer-phase-${state.phase}`}>
          <div className='ip-panel-title ip-panel-title--black'>
            Doing smart stuff
          </div>
          <div className='ip-panel-sub-title ip-panel-sub-title--black'>
            This shouldn't take too long, just crunching the numbers...
          </div>
          <IpSpinner />
        </div>
      </div>
    )
  }
}
