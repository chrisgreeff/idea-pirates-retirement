'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Redirect, browserHistory } from 'react-router'

import ThreeQuestions from './pages/three-questions.jsx'
import Slider from './pages/slider.jsx'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/three-questions' component={ThreeQuestions} />
    <Route path='/slider' component={Slider} />
    <Redirect path='*' to='/three-questions' />
  </Router>
), document.getElementById('app'))
