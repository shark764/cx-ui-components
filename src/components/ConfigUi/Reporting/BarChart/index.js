/*
 * Copyright © 2015-2020 Serenova, LLC. All rights reserved.
 */

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
import styled, { injectGlobal } from 'styled-components';
import { importantCss } from '../../../../utils';

const DEFAULT_COLORS = ['#4CAF50', '#FFA500', '#07487a', '#001b1e', '#00C49F', '#54B84F', '#b7e3b3'];

injectGlobal`${importantCss(`
  .chart--clickable > .recharts-wrapper {
    cursor: pointer;
  }
  .recharts-legend-wrapper {
    color: #999999;
    font-weight: 600;
  }
`)}`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  grid-area: ${props=> props.gridArea && props.gridArea};
`;

const StatName = styled.h2`
  color: #ffffff;
  font-size: 21px;
  font-weight: normal;
`;

function BarChart({
  data,
  dataKeys,
  xDataKey,
  width,
  height,
  showLegend = true,
  showTooltip = true,
  percentageYLabels = false,
  colors = DEFAULT_COLORS,
  onClick,
  statName,
  gridArea,
  id
}) {
  return (
    <Wrapper gridArea={gridArea} id={id}>
      <StatName>{statName}</StatName>
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
          {showLegend && <Legend verticalAlign="top" height={36} align="center" style={{ color: '#999999', fontWeight: 600 }} />}
          {dataKeys.map((item, index) => (
            <Bar key={index.toString()} dataKey={toCapitalizedWords(item)} fill={getIndexColor(index)} />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </Wrapper>
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
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  showLegend: PropTypes.bool,
  showTooltip: PropTypes.bool,
  percentageYLabels: PropTypes.bool,
  displayVertical: PropTypes.bool,
  colors: PropTypes.array,
  onClick: PropTypes.func,
  id: PropTypes.string,
  gridArea: PropTypes.string,
  statName: PropTypes.string,
};

export default BarChart;
