'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import accounting from 'accounting'
import max from 'lodash/max'

export default class IpLifetimeProjection extends React.Component {
  componentDidMount () {
    const { colour, values } = this.props
    const containerEl = this.el
    const projectionLabels = [
      'Now', 'Working', 'Semi Retired', 'Active Retirement', 'Less Active Retirement', 'Old Age'
    ]
    const chartMargins = { top: 20, bottom: 20, left: 0, right: 0 }
    const chartWidth = containerEl.clientWidth - chartMargins.left - chartMargins.right
    const chartHeight = 100
    const y = d3.scale.linear().range([chartHeight, 0]).domain([0, max(values)])

    const svg = d3.select(containerEl)
      .append('svg')
      .attr('width', chartWidth)
      .attr('height', chartHeight + chartMargins.top + chartMargins.bottom)

    const chart = svg.append('g')
      .attr('transform', `translate(${chartMargins.left}, ${chartMargins.top})`)

    const barWidth = (chartWidth / values.length) - 20

    const bars = chart.selectAll('rect')
      .data(values)
      .enter()
      .append('rect')
      .attr('class', 'ip-projection-chart-bar')
      .attr('fill', d3.rgb(colour))
      .attr('x', (d, i) => (i * (chartWidth / values.length)) + 10)
      .attr('y', chartHeight - 1)
      .attr('width', barWidth)
      .attr('height', 1)

    chart.selectAll('.ip-projection-chart-x-axis-label')
      .data(values)
      .enter()
      .append('text')
      .attr('x', (d, i) => (i * (chartWidth / values.length)) + (barWidth / 2) + 10)
      .attr('y', chartHeight + 15)
      .attr('text-anchor', 'middle')
      .attr('class', 'ip-projection-chart-x-axis-label')
      .text((d, i) => projectionLabels[i])

    const labels = chart.selectAll('.ip-projection-chart-bar-label')
      .data(values)
      .enter()
      .append('text')
      .attr('x', (d, i) => (i * (chartWidth / values.length)) + (barWidth / 2) + 10)
      .attr('y', chartHeight)
      .attr('text-anchor', 'middle')
      .attr('class', 'ip-projection-chart-bar-label')
      .text(0)

    labels.transition()
      .duration(1000)
      .delay(0)
      .attr('y', (d) => y(d) - 5)
      .tween('text', (d) => {
        const i = d3.interpolate(0, d)

        return function (t) {
          d3.select(this).text((accounting.formatMoney(i(t), '$', 0)))
        }
      })

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

IpLifetimeProjection.propTypes = {
  colour: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired
}
