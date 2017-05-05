'use strict'

import React from 'react'
import accounting from 'accounting'
import max from 'lodash/max'
import IpSection from '../components/section.jsx'

export default class TrendLine extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      colour: '#5D9990',
      values: [20345, 30123, 50345, 35123, 30012, 20345],
      trend: [15345, 25123, 55345, 40123, 25012, 18345]
    }
  }

  componentDidMount () {
    const { colour, values, trend } = this.state
    const containerEl = this.el
    const projectionLabels = [
      'Now', 'Working', 'Semi Retired', 'Active Retirement', 'Less Active Retirement', 'Old Age'
    ]
    const chartMargins = { top: 20, bottom: 20, left: 0, right: 0 }
    const chartWidth = containerEl.clientWidth - chartMargins.left - chartMargins.right
    const chartHeight = 100
    const barWidth = (chartWidth / values.length) - 20
    const y = d3.scale.linear().range([chartHeight, 0]).domain([0, max([max(values), max(trend)])])

    const line = d3.svg.line()
      .x((d, i) => (i * (chartWidth / trend.length)) + (barWidth / 2) + 10)
      .y((d) => y(d) + chartMargins.top)
      .interpolate('cardinal')
      .tension(0.9)

    const svg = d3.select(containerEl)
      .append('svg')
      .attr('width', chartWidth)
      .attr('height', chartHeight + chartMargins.top + chartMargins.bottom)

    const chart = svg.append('g')
      .attr('transform', `translate(${chartMargins.left}, ${chartMargins.top})`)

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

    svg.append('path')
     .data(trend)
     .attr('class', 'ip-projection-chart-line')
     .attr('d', line(trend))

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
      <IpSection>
        <div className='ip-projection-chart' ref={(el) => { this.el = el }} />
      </IpSection>
    )
  }
}
