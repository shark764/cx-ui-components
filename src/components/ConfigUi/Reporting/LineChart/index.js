/*
 * Copyright © 2015-2020 Serenova, LLC. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';
import { importantCss } from '../../../../utils';
import { ResponsiveContainer, LineChart as RechartLineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';

injectGlobal`${importantCss(`
  .linechart--clickable > .recharts-wrapper {
    cursor: pointer;
  }
`)}`;

function LineChart({ width, height, data, dataKeys, xDataKey, onClick }) {
    return (
        <ResponsiveContainer width={width} height={height} className={getClasses()}>
            <RechartLineChart onClick={onClick} data={data}>
                <XAxis dataKey={xDataKey} />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                {dataKeys.map((item, index) => (
                    <Line key={index.toString()} name={item.name} type={item.lineType ? item.lineType : 'monotone'} dataKey={item.dataKey} stroke={item.stroke ? item.stroke : '#8884d8'}></Line>
                ))}
            </RechartLineChart>
        </ResponsiveContainer>
    )
    function getClasses() {
        return `linechart ${onClick ? 'linechart--clickable' : ''}`;
    }
};

LineChart.proptypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dataKeys: PropTypes.array,
    xDataKey: PropTypes.string,
    onClick: PropTypes.func,
};

export default LineChart;
