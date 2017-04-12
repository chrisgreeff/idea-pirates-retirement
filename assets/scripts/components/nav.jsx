'use strict'

import React from 'react'
import IpNavLink from './nav-link'

export default class IpNav extends React.Component {
  render () {
    const { appStore } = window

    return (
      <div className='ip-nav'>
        <IpNavLink value={appStore.getState().age} to='age'>Age</IpNavLink>
        <IpNavLink value={appStore.getState().salary} to='salary'>Salary</IpNavLink>
        <IpNavLink value={appStore.getState().location} to='location'>Location</IpNavLink>
      </div>
    )
  }
}
