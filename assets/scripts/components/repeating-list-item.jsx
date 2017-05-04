'use strict'

import React from 'react'

export default class IpRepeatingListItem extends React.Component {
  constructor (props) {
    super(props)

    this.toggleExpand = this.toggleExpand.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  toggleExpand () {
    this.props.toggleExpand(this.props.index)
  }

  removeItem (event) {
    event.preventDefault()
    event.stopPropagation()
    this.props.removeItem(this.props.index)
  }

  render () {
    const { item } = this.props

    return (
      <li className={`
          ip-repeating-list-item
          ${item.expanded ? 'ip-expanded' : ''}
        `}
        ref={(item) => { this.item = item }}>
        <div className='ip-repeating-list-item-primary' onClick={this.toggleExpand}>
          {this.props.item.what}
          <a href='javascript:void(0)' onClick={this.removeItem}>Remove</a>
        </div>
        <div className='ip-repeating-list-item-secondary'>
          <div className='ip-field ip-mbm'>
            <div className='ip-label'>
              What do you want?
            </div>
            <div className='ip-value'>
              <input className={`ip-input`}
                defaultValue={this.props.item.what}
                type='text' />
            </div>
          </div>
          <div className='ip-field ip-mbm'>
            <div className='ip-label'>
              Why is this goal important?
            </div>
            <div className='ip-value'>
              <input className={`ip-input`}
                defaultValue={this.props.item.why}
                type='text' />
            </div>
          </div>
          <div className='ip-field ip-mbm'>
            <div className='ip-label'>
              When do you want to achieve this goal?
            </div>
            <div className='ip-value'>
              <input className={`ip-input`}
                defaultValue={this.props.item.when}
                type='text' />
            </div>
          </div>
          <div className='ip-field'>
            <div className='ip-label'>
              How do you measure when this goal is achieved?
            </div>
            <div className='ip-value'>
              <input className={`ip-input`}
                defaultValue={this.props.item.how}
                type='text' />
            </div>
          </div>
          <div>
            <a href='javascript:void(0)' onClick={this.toggleExpand}>Collapse</a>
          </div>
        </div>
      </li>
    )
  }
}
