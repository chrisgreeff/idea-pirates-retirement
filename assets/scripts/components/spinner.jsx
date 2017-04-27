'use strict'

import React from 'react'

export default class IpSpinner extends React.Component {
  render () {
    return (
      <div className='ip-spinner'>
        <div className='ip-spinner-rect ip-spinner-rect--1' />
        <div className='ip-spinner-rect ip-spinner-rect--2' />
        <div className='ip-spinner-rect ip-spinner-rect--3' />
        <div className='ip-spinner-rect ip-spinner-rect--4' />
        <div className='ip-spinner-rect ip-spinner-rect--5' />
      </div>
    )
  }
}
