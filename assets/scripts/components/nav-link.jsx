'use strict'

import React from 'react'
import { Link } from 'react-router'

export default class IpNavLink extends React.Component {
  render () {
    return (
      <Link to={this.props.to} className='ip-nav-link' activeClassName='ip-active'>
        <div className='ip-nav-link-copy'>{this.props.children}</div>
        <i className='ip-nav-link-icon fa fa-circle-o' />
      </Link>
    )
  }
}
