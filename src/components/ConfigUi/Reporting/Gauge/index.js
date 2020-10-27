/*
 * Copyright © 2015-2020 Serenova, LLC. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip, Text } from 'recharts';
import { injectGlobal } from 'styled-components';
import { importantCss } from '../../../../utils';

const DEFAULT_COLORS = ['#FF0000', '#23cdf4', '#0088FE', '#07487a', '#001b1e', '#00C49F', '#54B84F', '#b7e3b3'];

injectGlobal`${importantCss(`
  .gauge--clickable > .recharts-wrapper {
    cursor: pointer;
  }
`)}`;

function Gauge({
  percentage,
  data,
  cy,
  width,
  height,
  startAngle,
  endAngle,
  showLegend = false,
  showTooltip = false,
  showNameLabels = false,
  percentageLabels = false,
  colors = DEFAULT_COLORS,
  digitsAfterPeriod = 0,
  onClick,
  dataKey
}) {
  if (!percentage && !data) {
    return;
  }

  const gaugeData = data || getDataFromPercentage(percentage);

  return (
    <ResponsiveContainer width={width} height={height} className={getClasses()}>
      <PieChart onClick={onClick}>
        <Pie
          cy={cy}
          data={gaugeData}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={getRadius('inner')}
          outerRadius={getRadius('outer')}
          paddingAngle={0}
          label={getCustomLabel()}
          labelLine={!percentage}
          dataKey={dataKey}
        >
          {gaugeData.map((_, index) => (
            <Cell key={index.toString()} fill={getIndexColor(index)} />
          ))}
        </Pie>
        {showLegend && <Legend />}
        {showTooltip && (
          <Tooltip
            formatter={value => {
              return showNameLabels ? `: ${value}` : '';
            }}
            separator=""
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  );

  function getDataFromPercentage(percentage) {
    const remaining = 100 - percentage;
    return [{ name: `${percentage}%`, value: percentage }, { name: `${remaining}%`, value: remaining }];
  }

  function getClasses() {
    return `gauge ${onClick ? 'gauge--clickable' : ''}`;
  }

  function getRadius(option) {
    if (option === 'inner') {
      return showNameLabels ? '45%' : '70%';
    } else {
      return showNameLabels ? '50%' : '80%';
    }
  }

  function getIndexColor(index) {
    return colors[index % colors.length];
  }

  function getCustomLabel() {
    if (percentage) {
      return getPercentageLabel;
    }
    if (showNameLabels) {
      return getNameLabel;
    }
    return getValueLabel;
  }

  // eslint-disable-next-line
  function getPercentageLabel({ cx, cy, percent, index }) {
    if (index) {
      return;
    }
    return (
      <Text x={cx} y={cy} fill={getIndexColor(0)} textAnchor="middle" style={{ fontSize: '2em' }}>
        {`${(percent * 100).toFixed(digitsAfterPeriod)}%`}
      </Text>
    );
  }

  function getNameLabel({ name }) {
    return name;
  }

  function getValueLabel({ value }) {
    return `${value}${percentageLabels ? '%' : ''}`;
  }
}

Gauge.propTypes = {
  percentage: PropTypes.number,
  data: PropTypes.array,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  showLegend: PropTypes.bool,
  showTooltip: PropTypes.bool,
  showNameLabels: PropTypes.bool,
  percentageLabels: PropTypes.bool,
  colors: PropTypes.array,
  digitsAfterPeriod: PropTypes.number,
  onClick: PropTypes.func,
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
  dataKey: PropTypes.string.isRequired,
  cy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gauge.defaultProps = {
  cy: "66%",
  startAngle: 180,
  endAngle: 0
};

export default Gauge;
