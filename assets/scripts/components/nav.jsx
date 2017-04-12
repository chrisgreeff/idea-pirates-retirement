'use strict'

import React from 'react'
import IpNavLink from './nav-link'

export default class IpNav extends React.Component {
  constructor (props) {
    const { appStore } = window

    super(props)

    this.state = appStore.getState()

    appStore.subscribe(() => {
      this.state = appStore.getState()
      this.forceUpdate()
    })
  }

  render () {
    return (
      <div className='ip-nav'>
        <IpNavLink value={this.state.age} to='age'>Age</IpNavLink>
        <IpNavLink value={this.state.salary} to='salary'>Salary</IpNavLink>
        <IpNavLink value={this.state.location} to='location'>Location</IpNavLink>
      </div>
    )
  }
}
