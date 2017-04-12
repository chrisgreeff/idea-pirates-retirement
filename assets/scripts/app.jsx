'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Redirect, browserHistory } from 'react-router'

import Age from './pages/age'
import Salary from './pages/salary'
import Location from './pages/location'
import appStore from './stores/app'

// Init stores
appStore.subscribe(() => console.log(appStore.getState()))

ReactDOM.render((
  <Router history={browserHistory}>
    <Route>
      <Route path='age' component={Age} />
      <Route path='salary' component={Salary} />
      <Route path='location' component={Location} />
      <Redirect path='*' to='age' />
    </Route>
  </Router>
), document.getElementById('app'))
