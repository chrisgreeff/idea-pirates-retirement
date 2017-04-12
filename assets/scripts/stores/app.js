'use strict'

import { assign } from 'lodash'
import { createStore } from 'redux'
import APP_ACTIONS from '../constants/app-actions'

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case APP_ACTIONS.setAge:
      return assign(state, {
        age: action.value
      })
    case APP_ACTIONS.setSalary:
      return assign(state, {
        salary: action.value
      })
    case APP_ACTIONS.setLocation:
      return assign(state, {
        location: action.value
      })
  }
}

export default createStore(appReducer)
