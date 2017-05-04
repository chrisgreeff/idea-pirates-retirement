'use strict'

import React from 'react'
import IpSection from '../components/section.jsx'
import IpRepeatingList from '../components/repeating-list.jsx'

export default class RepeatingList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      items: [{
        what: 'Be fit and healthy',
        why: 'Retain mobile independence',
        when: new Date(),
        how: 'Weight loss'
      }, {
        what: 'Go on 4 week holiday a year',
        why: 'So I can stay sane',
        when: new Date(),
        how: 'Holidays'
      }]
    }
  }

  render () {
    return (
      <IpSection>
        <div className='ip-title'>Goals</div>

        <IpRepeatingList items={this.state.items} />
      </IpSection>
    )
  }
}
