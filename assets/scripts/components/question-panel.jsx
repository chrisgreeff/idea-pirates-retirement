'use strict'

import React from 'react'
import PropTypes from 'prop-types'

export default class IpQuestionPanel extends React.Component {
  constructor (props) {
    super(props)

    this.state = { active: false }
    this.onPanelClick = this.onPanelClick.bind(this)
    this.onPanelBlur = this.onPanelBlur.bind(this)
  }

  onPanelClick () {
    this.input.select()
    this.setState({ active: true })
  }

  onPanelBlur () {
    this.setState({ active: false })
    this.props.blurHandler()
  }

  render () {
    const {
      changeHandler,
      className,
      formattedValue,
      imgPath,
      index,
      phase2Content,
      prefix,
      subTitle,
      suffix,
      textType,
      title,
      value
    } = this.props

    return (
      <div className={`
          ip-panel
          ip-panel--clickable
          ip-align-center
          ${className || ''}
          ${this.state.active ? 'ip-active' : ''}
          ${this.props.phase === 2 ? 'ip-panel--phase-2' : ''}
        `}
        ref={(panel) => { this.panel = panel }}
        onClick={this.onPanelClick}
        onBlur={this.onPanelBlur}>
        <div className='ip-panel-top-container'>
          <img className='ip-panel-image' src={imgPath} />
          <div className='ip-panel-phase-2-content'>
            {phase2Content && <div className='ip-panel-phase-2-content-primary'>{formattedValue || value}</div>}
            {phase2Content && <div className='ip-panel-phase-2-content-secondary'>{phase2Content}</div>}
            {!phase2Content && <div className='ip-panel-phase-2-content-secondary'>{value}</div>}
          </div>
        </div>

        <div className='ip-panel-bottom-container'>
          <div className='ip-panel-title ip-mbm'>
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
              ref={(input) => { this.input = input }}
              value={value}
              onChange={changeHandler}
              type={textType || 'number'} />
            {prefix && <div className='ip-value-prefix'>{prefix}</div>}
            {suffix && <div className='ip-value-suffix'>{suffix}</div>}
          </div>

          <div className={`ip-circle ip-mrl ${index === 1 ? 'ip-active' : ''}`} />
          <div className={`ip-circle ip-mrl ${index === 2 ? 'ip-active' : ''}`} />
          <div className={`ip-circle ${index === 3 ? 'ip-active' : ''}`} />
        </div>
      </div>
    )
  }
}

IpQuestionPanel.propTypes = {
  blurHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
  index: PropTypes.number.isRequired,
  imgPath: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  subTitle: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
}
