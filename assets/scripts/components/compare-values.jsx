'use strict'

import accounting from 'accounting'
import React from 'react'
import PropTypes from 'prop-types'
import AnimatedNumber from 'react-animated-number'

export default class IpCompareValues extends React.Component {
  constructor (props) {
    super(props)

    this.formatValue = this.formatValue.bind(this)
  }

  formatValue (value) {
    return accounting.formatMoney(value, '$', 0)
  }

  render () {
    const { from, to } = this.props

    return (
      <div className='ip-compare-values'>
        <div className='ip-compare-value ip-compare-value--from'>
          <div className='ip-compare-value-gross'>
            <AnimatedNumber duration={1000} formatValue={n => this.formatValue(n)} value={from.gross} />
            <div className='ip-compare-value-gross-suffix'>gross</div>
          </div>
          <div className='ip-compare-value-net'>
            <AnimatedNumber duration={1000} formatValue={n => this.formatValue(n)} value={from.net} />
            <div className='ip-compare-value-net-suffix'>net</div>
          </div>
        </div>
        <div className='ip-compare-values-separator-container'>
          <div className='ip-compare-values-separator-label ip-compare-values-separator-label--left'>now</div>
          <div className='ip-compare-values-separator' />
          <div className='ip-compare-values-separator-label ip-compare-values-separator-label--right'>65 years old</div>
        </div>
        <div className='ip-compare-value ip-compare-value--to'>
          <div className='ip-compare-value-gross'>
            <AnimatedNumber duration={1000} formatValue={n => this.formatValue(n)} value={to.gross} />
            <div className='ip-compare-value-gross-suffix'>gross</div>
          </div>
          <div className='ip-compare-value-net'>
            <AnimatedNumber duration={1000} formatValue={n => this.formatValue(n)} value={to.net} />
            <div className='ip-compare-value-net-suffix'>net</div>
          </div>
        </div>
      </div>
    )
  }
}

IpCompareValues.propTypes = {
  from: PropTypes.object.isRequired,
  to: PropTypes.object.isRequired
}
