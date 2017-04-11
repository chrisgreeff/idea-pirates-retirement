'use strict'

import React from 'react'

export default class IpSection extends React.Component {
  render () {
    return (
      <div className='ip-section'>
        <div className='ip-section-wrap'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
