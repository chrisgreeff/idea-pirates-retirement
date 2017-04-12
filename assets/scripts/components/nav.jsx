'use strict'

import React from 'react'
import IpSection from '../components/section'
import IpNavLink from './nav-link'

export default class IpNav extends React.Component {
  render () {
    return (
      <div className='ip-nav'>
        <IpNavLink to='age'>Age</IpNavLink>
        <IpNavLink to='salary'>Salary</IpNavLink>
        <IpNavLink to='location'>Location</IpNavLink>
      </div>
    )
  }
}
