'use strict'

import React from 'react'
import { Link } from 'react-router'

export default class IpNavLink extends React.Component {
  render () {
    const { props } = this

    return (
      <Link to={props.to} className='ip-nav-link' activeClassName='ip-active'>
        <div className='ip-nav-link-copy'>{props.children}{props.value ? `: (${props.value})` : ''}</div>
        <i className='ip-nav-link-icon fa fa-circle-o' />
      </Link>
    )
  }
}
