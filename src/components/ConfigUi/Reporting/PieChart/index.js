/*
 * Copyright © 2015-2020 Serenova, LLC. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, PieChart as RechartPieChart, Pie, Cell, Legend, Tooltip, Text } from 'recharts';
import { injectGlobal } from 'styled-components';
import { importantCss } from '../../../../utils';

const DEFAULT_COLORS = ['#23cdf4', '#0088FE', '#07487a', '#001b1e', '#00C49F', '#54B84F', '#b7e3b3'];

injectGlobal`${importantCss(`
  .piechart--clickable > .recharts-wrapper {
    cursor: pointer;
  }
`)}`;

function PieChart({
  data,
  width,
  height,
  showInnerLabels = false,
  showLegend = true,
  showTooltip = false,
  showNameLabels = false,
  percentageLabels = false,
  showAsDonut = false,
  colors = DEFAULT_COLORS,
  digitsAfterPeriod = 0,
  onClick,
  dataKey,
  nameKey
}) {
  return (
    <ResponsiveContainer width={width} height={height} className={getClasses()}>
      <RechartPieChart onClick={onClick}>
        <Pie
          data={data}
          innerRadius={getInnerRadius()}
          outerRadius={getOuterRadius()}
          label={getCustomLabel()}
          labelLine={!showInnerLabels}
          dataKey={dataKey}
          nameKey={nameKey}
        >
          {data.map((_, index) => (
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
      </RechartPieChart>
    </ResponsiveContainer>
  );

  function getClasses() {
    return `piechart ${onClick ? 'piechart--clickable' : ''}`;
  }

  function getInnerRadius() {
    if (!showAsDonut) {
      return 0;
    }
    return showInnerLabels ? '40%' : '60%';
  }

  function getOuterRadius() {
    return showNameLabels ? '50%' : '70%';
  }

  function getIndexColor(index) {
    return colors[index % colors.length];
  }

  function getCustomLabel() {
    if (showInnerLabels) {
      return getInnerLabel;
    }
    if (showNameLabels) {
      return getNameLabel;
    }
    return getValueLabel;
  }

  // eslint-disable-next-line
  function getInnerLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }) {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * (showAsDonut ? 0.25 : 0.45);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <Text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(digitsAfterPeriod)}${percentageLabels ? '%' : ''}`}
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

PieChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  showInnerLabels: PropTypes.bool,
  showLegend: PropTypes.bool,
  showTooltip: PropTypes.bool,
  showNameLabels: PropTypes.bool,
  percentageLabels: PropTypes.bool,
  showAsDonut: PropTypes.bool,
  colors: PropTypes.array,
  digitsAfterPeriod: PropTypes.number,
  onClick: PropTypes.func,
  dataKey: PropTypes.string,
  nameKey: PropTypes.string
};

export default PieChart;
