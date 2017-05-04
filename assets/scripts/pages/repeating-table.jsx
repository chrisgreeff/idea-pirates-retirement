'use strict'

import React from 'react'
import find from 'lodash/find'
import ipUuidService from '../services/uuid.js'
import IpSection from '../components/section.jsx'

export default class RepeatingTable extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      rows: [{
        id: ipUuidService.generate(),
        title: 'Income',
        checked: false,
        expanded: false,
        subRows: [{
          title: 'Dining out',
          working: 300,
          semiRetired: 200,
          activeRetirement: 200,
          lessActiveRetirement: 233,
          oldAge: 123,
          checked: false
        }]
      }]
    }

    this.toggleExpandRow = this.toggleExpandRow.bind(this)
  }

  toggleExpandRow (row) {
    const { rows } = this.state

    row.expanded = !row.expanded

    this.setState({ rows })
  }

  render () {
    const { rows } = this.state
    const rowsToRender = rows.map((row, index) => {
      const subRowsToRender = row.subRows.map((subRow, index) => {
        return (
          <tr key={index} className={`${!row.expanded ? 'ip-hidden' : ''}`}>
            <td>{subRow.title}</td>
            <td>{subRow.working}</td>
            <td>{subRow.semiRetired}</td>
            <td>{subRow.activeRetirement}</td>
            <td>{subRow.lessActiveRetirement}</td>
            <td>{subRow.oldAge}</td>
          </tr>
        )
      })

      return (
        <tbody key={index}>
          <tr>
            <td colSpan='6'>
              <a className='ip-table-link'
                onClick={() => { this.toggleExpandRow(row) }}
                href='javascript:void(0)'>
                {row.title}
              </a>
            </td>
          </tr>
          {subRowsToRender}
        </tbody>
      )
    })

    return (
      <IpSection>
        <table className='ip-table'>
          <thead>
            <tr>
              <th>Weekly</th>
              <th>Working</th>
              <th>Semi Retired</th>
              <th>Active Retirement</th>
              <th>Less Active Retirement</th>
              <th>Old Age</th>
            </tr>
          </thead>
          {rowsToRender}
        </table>
      </IpSection>
    )
  }
}
