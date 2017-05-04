'use strict'

import map from 'lodash/map'
import React from 'react'
import IpRepeatingListItem from './repeating-list-item.jsx'

export default class IpRepeatingList extends React.Component {
  constructor (props) {
    super(props)

    this.removeItem = this.removeItem.bind(this)
  }

  removeItem (index) {
    this.props.items.splice(index, 1)
  }

  render () {
    const repeatingListItems = map(this.props.items, (item, index) => {
      return <IpRepeatingListItem item={item} key={index} removeItem={this.removeItem} />
    })

    return (
      <ul className='ip-repeating-list'>
        {repeatingListItems}
      </ul>

    )
  }
}
