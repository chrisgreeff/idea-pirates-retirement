'use strict'

import React from 'react'
import IpSection from '../components/section'
import IpNav from '../components/nav'
import appStore from '../stores/app'
import APP_ACTIONS from '../constants/app-actions'

export default class Age extends React.Component {
  render () {
    return (
      <div className='ip-page'>
        <div>
          <IpSection>
            <div className='ip-flex ip-flex--align-end'>
              <div className='ip-field'>
                <div className='ip-label'>Tell us your age...</div>
                <div className='ip-value'>
                  <input className='ip-input' type='number' />
                </div>
              </div>
              <button className='ip-next-button ip-mlm' onClick={() => {
                appStore.dispatch({
                  type: APP_ACTIONS.setAge,
                  value: 0
                })
              }}>
                <i className='fa fa-arrow-right' />
              </button>
            </div>
          </IpSection>
          <IpNav />
        </div>
      </div>
    )
  }
}
