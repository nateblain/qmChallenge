import * as d3 from 'd3';

import { SessionChartData, Chart } from '../types/DomainTypes';

const chart: () => Chart = () => {
  const margin = { top: 20, right: 20, bottom: 110, left: 40 },
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

  const x = d3.scaleBand().rangeRound([0, width]).padding(0.05);
  const y = d3.scaleLinear().range([height, 0]);

  return {
    buildBarChart: (sessionChartData: SessionChartData[]) => {
      const xAxis = d3.axisBottom(x);
      const yAxis = d3.axisLeft(y).ticks(10);

      const svg = d3
        .select('#chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      x.domain(sessionChartData.map((d) => d.displayName));
      y.domain([0, d3.max(sessionChartData, (d: any) => d.count || 10)]);

      svg
        .append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis)
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-.8em')
        .attr('dy', '-.55em')
        .attr('transform', 'rotate(-90)');

      svg
        .append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text('Value ($)');

      svg
        .selectAll('.bar')
        .data(sessionChartData)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .style('fill', 'steelblue')
        .attr('x', (d: SessionChartData) => x(d.displayName) || 0)
        .attr('width', x.bandwidth())
        .attr('y', (d: SessionChartData) => y(d.count))
        .attr('height', (d: SessionChartData) => height - y(d.count));
    },

    updateChart: (sessionChartData: SessionChartData[]) => {
      const yAxis = d3.axisLeft(y).ticks(10);

      y.domain([0, d3.max(sessionChartData, (d: any) => d.count || 10)]);

      const svg = d3.select('#chart');
      // @ts-ignore:disable-next-line
      svg.selectAll('g .y.axis').call(yAxis);

      // update the bars
      d3.selectAll('.bar')
        .data(sessionChartData)
        .transition()
        .duration(500)
        .attr('x', (d) => x(d.displayName) || 0)
        .attr('y', (d) => y(d.count))
        .attr('height', (d) => height - y(d.count));
    },
  };
};

export default chart;
