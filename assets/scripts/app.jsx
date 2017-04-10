'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Redirect, browserHistory } from 'react-router'

import Nav from './pages/nav.jsx'
import About from './pages/about.jsx'
import Work from './pages/work.jsx'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={Nav}>
      <Route path='work' component={Work} />
      <Route path='about' component={About} />
      <Redirect path='*' to='work' />
    </Route>
  </Router>
), document.getElementById('app'))
