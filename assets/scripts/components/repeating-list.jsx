'use strict'

import forEach from 'lodash/forEach'
import React from 'react'
import IpRepeatingListItem from './repeating-list-item.jsx'

export default class IpRepeatingList extends React.Component {
  constructor (props) {
    super(props)

    this.state = { items: this.props.items }

    this.removeItem = this.removeItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.toggleExpand = this.toggleExpand.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  removeItem (index) {
    const { items } = this.state

    items.splice(index, 1)
    this.setState({ items })
  }

  addItem () {
    const { items } = this.state

    forEach(items, (item) => {
      item.expanded = false
    })

    items.push({
      what: '',
      why: '',
      when: '',
      how: '',
      expanded: true
    })

    this.setState({ items })
  }

  toggleExpand (index) {
    const { items } = this.state

    items[index].expanded = !items[index].expanded

    this.setState({ items })
  }

  changeHandler (index, item) {
    const { items } = this.state

    items[index] = item

    this.setState({ items })
  }

  render () {
    const { items } = this.state
    const repeatingListItems = items.map((item, index) => {
      return <IpRepeatingListItem item={item}
        key={index}
        index={index}
        removeItem={this.removeItem}
        toggleExpand={this.toggleExpand}
        changeHandler={this.changeHandler} />
    })

    return (
      <div>
        <ul className='ip-repeating-list'>
          {repeatingListItems}
        </ul>
        <a href='javascript:void(0)' onClick={this.addItem}>Add Item</a>
      </div>
    )
  }
}
