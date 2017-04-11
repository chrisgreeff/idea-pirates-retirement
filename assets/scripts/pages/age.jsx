'use strict'

import React from 'react'
import IpSection from '../components/section'

export default class Age extends React.Component {
  render () {
    return (
      <div className='ip-page'>
        <IpSection>
          <div className='ip-flex ip-flex--align-end'>
            <div className='ip-field'>
              <div className='ip-label'>Tell us your age...</div>
              <div className='ip-value'>
                <input className='ip-input' type='number' />
              </div>
            </div>
            <button className='ip-next-button ip-mlm'>
              <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </IpSection>
      </div>
    )
  }
}
