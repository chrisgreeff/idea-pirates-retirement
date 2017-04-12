'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import { createStore } from 'redux'

import Age from './pages/age'
import Salary from './pages/salary'
import Location from './pages/location'
import Crunching from './pages/crunching'
import Result from './pages/result'
import appReducer from './reducers/app'

// Init store
window.appStore = createStore(appReducer)
window.appStore.subscribe(() => console.log(window.appStore.getState()))

ReactDOM.render((
  <Router history={browserHistory}>
    <Route>
      <Route path='age' component={Age} />
      <Route path='salary' component={Salary} />
      <Route path='location' component={Location} />
      <Route path='crunching' component={Crunching} />
      <Route path='result' component={Result} />
      <Redirect path='*' to='age' />
    </Route>
  </Router>
), document.getElementById('app'))
