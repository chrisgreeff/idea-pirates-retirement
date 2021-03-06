'use strict'

import React from 'react'
import IpSpinner from './spinner.jsx'
import IpCompareValues from './compare-values.jsx'
import IpLifetimeProjection from './lifetime-projection.jsx'

export default class IpAnswer extends React.Component {
  componentWillUpdate (props) {
    const { state } = props

    if (state.result) {
      state.phase = 3
    }
  }

  render () {
    const { state } = this.props

    return (
      <div className='ip-answer'>
        <div className={`ip-panel ip-align-center ip-panel--answer-phase-${state.phase}`}>
          {state.phase === 2 && <div>
            <div className='ip-panel-title ip-panel-title--black'>
              Doing smart stuff
            </div>
            <div className='ip-panel-sub-title ip-panel-sub-title--black'>
              This shouldn't take too long, just crunching the numbers...
            </div>
            <IpSpinner />
          </div>}
          {state.phase === 3 && <div>
            <div className='ip-panel-title ip-height-a ip-mbm'>
              Weekly Income
            </div>
            <div className='ip-panel-sub-title ip-height-a ip-mbxl'>
              This shows how your weekly income now compare with that we expect it to be at retirement
            </div>

            <IpCompareValues
              from={state.result.from}
              to={state.result.to} />

            <hr className='ip-hr ip-mtxl ip-mbxl' />

            <div className='ip-panel-title ip-height-a ip-mbm'>
              Wealth Across Lifetime Projection
            </div>
            <div className='ip-panel-sub-title ip-height-a ip-mbl'>
              This shows how we expect your wealth to look over significant periods of your life
            </div>

            <IpLifetimeProjection colour='#5D9990' values={[20345, 30123, 50345, 35123, 30012, 20345]} />

            <hr className='ip-hr ip-mtxl ip-mbxl' />

            <div className='ip-panel-title ip-height-a ip-mbm'>
              Weekly Income Across Lifetime Projection
            </div>
            <div className='ip-panel-sub-title ip-height-a ip-mbl'>
              This shows how we expect your average weekly income to look over significant periods of your life
            </div>

            <IpLifetimeProjection colour='#5D7C99' values={[2345, 3124, 2345, 2123, 2012, 1845]} />
          </div>}
        </div>
      </div>
    )
  }
}
