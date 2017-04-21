'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import IpSection from './components/section'

import appReducer from './reducers/app'

// Init store
window.appStore = createStore(appReducer)
window.appStore.subscribe(() => console.log(window.appStore.getState()))

ReactDOM.render((
  <div>
    <IpSection>
      <div className='ip-title ip-mtxl'>
        Retireorama
      </div>
      <div className='ip-title ip-title--sub'>
        Let's calculate your retirement income with just 3 questions!
      </div>
    </IpSection>
    <IpSection>
      <div className='ip-flex'>
        <div className='ip-panel ip-align-center ip-mrxl'>
          <div className='ip-panel-title ip-mbl'>
            What's your age?
          </div>

          <div>We need to know how long you've for until retirement kicks in.</div>

          <div className='ip-value ip-mtxl ip-mbxl'>
            <input className='ip-input ip-input--suffix' type='number'>
            <div className='ip-value-suffix'>years</div>
          </div>

          <div className='ip-circle ip-mrl ip-active' />
          <div className='ip-circle ip-mrl' />
          <div className='ip-circle' />
        </div>
        <div className='ip-panel ip-align-center ip-mrxl'>
          <div className='ip-panel-title ip-mbl'>
            What’s your average annual income?
          </div>

          <div>We need to know how much money is coming into the bank.</div>

          <div className='ip-value ip-mtxl ip-mbxl'>
            <input className='ip-input ip-input--suffix ip-input--prefix' type='number'>
            <div className='ip-value-prefix'>$</div>
            <div className='ip-value-suffix'>annually</div>
          </div>

          <div className='ip-circle ip-mrl ip-active' />
          <div className='ip-circle ip-mrl' />
          <div className='ip-circle' />
        </div>
        <div className='ip-panel'>Hey</div>
      </div>
    </IpSection>
  </div>
), document.getElementById('app'))
