'use strict'

import React from 'react'

export default class IpSection extends React.Component {
  render () {
    const { className } = this.props

    return (
      <div className={`ip-section ${className || ''}`}>
        <div className='ip-section-wrap'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
