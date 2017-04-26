'use strict'

import React from 'react'
import PropTypes from 'prop-types'

export default class IpQuestionPanel extends React.Component {
  render () {
    const { suffix, prefix, title, imgPath, subTitle, className, changeHandler, value, index } = this.props

    return (
      <div className={`ip-panel ip-panel--clickable ip-align-center ${className || ''}`}>
        <div className='ip-panel-image-container'>
          <img className='ip-panel-image' src={imgPath} />
        </div>

        <div className='ip-panel-title ip-mbl'>
          {title}
        </div>

        <div className='ip-panel-sub-title'>
          {subTitle}
        </div>

        <div className='ip-value ip-mtxl ip-mbxl'>
          <input
            className={
              `ip-input ip-panel-input ${suffix ? 'ip-input--suffix' : ''} ${prefix ? 'ip-input--prefix' : ''}`
            }
            value={value}
            onChange={changeHandler}
            type='number' />
          {prefix && <div className='ip-value-prefix'>{prefix}</div>}
          {suffix && <div className='ip-value-suffix'>{suffix}</div>}
        </div>

        <div className={`ip-circle ip-mrl ${index === 1 ? 'ip-active' : ''}`} />
        <div className={`ip-circle ip-mrl ${index === 2 ? 'ip-active' : ''}`} />
        <div className={`ip-circle ${index === 3 ? 'ip-active' : ''}`} />
      </div>
    )
  }
}

IpQuestionPanel.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  imgPath: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  subTitle: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
}
