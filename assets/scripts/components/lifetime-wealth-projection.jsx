'use strict'

import React from 'react'
import max from 'lodash/max'

export default class IpLifetimeWealthProjection extends React.Component {

  componentDidMount () {
    const containerEl = this.el
    const dataset = [1, 2, 3, 4, 5, 6]
    const projectionLabels = [
      'Now', 'Working', 'Semi Retired', 'Active Retirement', 'Less Active Retirement', 'Old Age'
    ]
    const chartMargins = { top: 20, bottom: 20, left: 0, right: 0 }
    const chartWidth = containerEl.clientWidth - chartMargins.left - chartMargins.right
    const chartHeight = 100
    const y = d3.scale.linear().range([chartHeight, 0]).domain([0, max(dataset)])

    const svg = d3.select(containerEl)
      .append('svg')
      .attr('width', chartWidth)
      .attr('height', chartHeight + chartMargins.top + chartMargins.bottom)

    const chart = svg.append('g')
      .attr('transform', `translate(${chartMargins.left}, ${chartMargins.top})`)

    const barWidth = (chartWidth / dataset.length) - 20

    const bars = chart.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('fill', 'teal')
      .attr('x', (d, i) => (i * (chartWidth / dataset.length)) + 10)
      .attr('y', chartHeight - 1)
      .attr('width', barWidth)
      .attr('height', 1)

    chart.selectAll('.ip-projection-chart-x-axis-label')
      .data(dataset)
      .enter()
      .append('text')
      .attr('x', (d, i) => (i * (chartWidth / dataset.length)) + (barWidth / 2) + 10)
      .attr('y', chartHeight + 15)
      .attr('text-anchor', 'middle')
      .attr('class', 'ip-projection-chart-x-axis-label')
      .text((d, i) => projectionLabels[i])

    chart.selectAll('.ip-projection-chart-bar-label')
      .data(dataset)
      .enter()
      .append('text')
      .attr('x', (d, i) => (i * (chartWidth / dataset.length)) + (barWidth / 2) + 10)
      .attr('y', (d) => y(d) - 5)
      .attr('text-anchor', 'middle')
      .attr('class', 'ip-projection-chart-bar-label')
      .text((d) => d)

    bars.transition()
      .duration(1000)
      .delay(100)
      .attr('y', (d) => y(d))
      .attr('height', (d) => chartHeight - y(d))
  }

  render () {
    return (
      <div className='ip-projection-chart' ref={(el) => { this.el = el }} />
    )
  }
}
