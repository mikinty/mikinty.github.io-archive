// import styling
import './../css/main.scss';

import * as d3 from 'd3';

// scale from 0 to 100
const skillsDataWeb = [
  {
    name: 'Webpack',
    value: '70',
  },
  {
    name: 'HTML',
    value: '70',
  },
  {
    name: 'Javascript',
    value: '80',
  },
  {
    name: 'SASS/CSS',
    value: '80',
  },
  {
    name: 'jQuery',
    value: '80',
  },
  {
    name: 'Chrome API',
    value: '70',
  },
  {
    name: 'Mocha',
    value: '60',
  },
  {
    name: 'D3',
    value: '50',
  },
  {
    name: 'Angular',
    value: '50',
  },
];

const skillsDataGen = [
  {
    name: 'Python',
    value: '90',
  },
  {
    name: 'Java',
    value: '80',
  },
  {
    name: 'LaTeX',
    value: '80',
  },
  {
    name: 'MATLAB',
    value: '65',
  },
  {
    name: 'Mathematica',
    value: '65',
  },
  {
    name: 'C',
    value: '50',
  },
  {
    name: 'SML/NJ',
    value: '50',
  },
];

// sort bars based on value
const dataWeb = skillsDataWeb.sort((a, b) => {
  return d3.ascending(a.value, b.value);
});

const margin = {
  top: 15,
  right: 25,
  bottom: 15,
  left: 60,
};

const width = 800 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

var svg = d3.select('.chart-skills-web').append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var x = d3.scaleLinear()
  .range([0, width])
  .domain([0, d3.max(dataWeb, (d) => {
    return d.value;
  })]);

var y = d3.scaleBand()
  .rangeRound([height, 0])
  .padding(0.3)
  .domain(dataWeb.map(function (d) {
    return d.name;
  }));

console.log(y);
console.log(y.bandwidth());

//make y axis to show bar names
var yAxis = d3.axisLeft()
  .scale(y)
  //no tick marks
  .tickSize(0);

// add the names
var gy = svg.append('g')
  .attr('class', 'y axis')
  .call(yAxis);

var bars = svg.selectAll('.bar')
  .data(dataWeb)
  .enter()
  .append('g');

//append rects
bars.append('rect')
  .attr('class', 'bar')
  .attr('y', function (d) {
    return y(d.name);
  })
  .attr('height', y.bandwidth())
  .attr('x', 0)
  .attr('width', (d) => {
    return x(d.value);
  });