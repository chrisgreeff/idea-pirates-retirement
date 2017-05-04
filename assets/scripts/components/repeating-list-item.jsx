'use strict'

import React from 'react'

export default class IpRepeatingListItem extends React.Component {
  constructor (props) {
    super(props)

    this.toggleExpand = this.toggleExpand.bind(this)
    this.whatChangeHandler = this.whatChangeHandler.bind(this)
    this.whyChangeHandler = this.whyChangeHandler.bind(this)
    this.whenChangeHandler = this.whenChangeHandler.bind(this)
    this.howChangeHandler = this.howChangeHandler.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  whatChangeHandler (event) {
    const { item, index } = this.props

    this.props.item.what = event.target.value
    this.props.changeHandler(index, item)
  }

  whyChangeHandler (event) {
    const { item, index } = this.props

    this.props.item.why = event.target.value
    this.props.changeHandler(index, item)
  }

  whenChangeHandler (event) {
    const { item, index } = this.props

    this.props.item.when = event.target.value
    this.props.changeHandler(index, item)
  }

  howChangeHandler (event) {
    const { item, index } = this.props

    this.props.item.how = event.target.value
    this.props.changeHandler(index, item)
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
        `}>
        <div className='ip-repeating-list-item-primary' onClick={this.toggleExpand}>
          <span>{this.props.item.what}</span>
          <a href='javascript:void(0)' onClick={this.removeItem}>Remove</a>
        </div>
        <div className='ip-repeating-list-item-secondary'>
          <div className='ip-field ip-mbm'>
            <div className='ip-label'>
              What do you want?
            </div>
            <div className='ip-value'>
              <input className={`ip-input`}
                value={this.props.item.what}
                onChange={this.whatChangeHandler}
                type='text' />
            </div>
          </div>
          <div className='ip-field ip-mbm'>
            <div className='ip-label'>
              Why is this goal important?
            </div>
            <div className='ip-value'>
              <input className={`ip-input`}
                value={this.props.item.why}
                onChange={this.whyChangeHandler}
                type='text' />
            </div>
          </div>
          <div className='ip-field ip-mbm'>
            <div className='ip-label'>
              When do you want to achieve this goal?
            </div>
            <div className='ip-value'>
              <input className={`ip-input`}
                value={this.props.item.when}
                onChange={this.whenChangeHandler}
                type='text' />
            </div>
          </div>
          <div className='ip-field'>
            <div className='ip-label'>
              How do you measure when this goal is achieved?
            </div>
            <div className='ip-value'>
              <input className={`ip-input`}
                value={this.props.item.how}
                onChange={this.howChangeHandler}
                type='text' />
            </div>
          </div>
          <div>
            <a className='ip-ib ip-mtm' href='javascript:void(0)' onClick={this.toggleExpand}>Collapse</a>
          </div>
        </div>
      </li>
    )
  }
}
