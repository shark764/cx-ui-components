import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts';
import { injectGlobal } from 'styled-components';
import { importantCss } from '../../../../utils';

const DEFAULT_COLORS = ['#23cdf4', '#0088FE', '#07487a', '#001b1e', '#00C49F', '#54B84F', '#b7e3b3'];

injectGlobal`${importantCss(`
  .chart--clickable > .recharts-wrapper {
    cursor: pointer;
  }
`)}`;

function BarChart({
  data,
  dataKeys,
  xDataKey,
  width,
  height,
  showLegend = false,
  showTooltip = false,
  percentageYLabels = false,
  colors = DEFAULT_COLORS,
  onClick,
}) {
  return (
    <ResponsiveContainer width={width} height={height} className={getClasses()}>
      <RechartsBarChart data={toHumanReadableLabels(data)} onClick={onClick}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={toCapitalizedWords(xDataKey)} />
        <YAxis unit={percentageYLabels ? '%' : ''} />
        {showTooltip && (
          <Tooltip
            formatter={value => {
              return percentageYLabels ? `${value}%` : value;
            }}
          />
        )}
        {showLegend && <Legend />}
        {dataKeys.map((item, index) => (
          <Bar key={index} dataKey={toCapitalizedWords(item)} fill={getIndexColor(index)} />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );

  function getClasses() {
    return `gauge ${onClick ? 'gauge--clickable' : ''}`;
  }

  function toHumanReadableLabels(dataArray) {
    return dataArray.map(function(item) {
      let processedItem = {};
      for (const [key, value] of Object.entries(item)) {
        processedItem[toCapitalizedWords(key)] = value;
      }
      return processedItem;
    });
  }

  function toCapitalizedWords(str) {
    const words = str.match(/[A-Za-z][a-z]*/g) || [];

    return words.map(capitalize).join(' ');
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  function getIndexColor(index) {
    return colors[index % colors.length];
  }
}

BarChart.propTypes = {
  data: PropTypes.array.isRequired,
  dataKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  xDataKey: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  showLegend: PropTypes.bool,
  showTooltip: PropTypes.bool,
  percentageYLabels: PropTypes.bool,
  displayVertical: PropTypes.bool,
  colors: PropTypes.array,
  onClick: PropTypes.func,
};

export default BarChart;
