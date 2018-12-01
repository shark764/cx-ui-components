/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

/**
 *
 * FilterSelect
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { camelCaseToRegularForm } from 'serenova-js-utils/strings';

const StyledSelector = styled.select`
  padding: ${props => {
    if (props.tableType === 'modal' || props.tableType === 'sidePanel') {
      return `0;`;
    } else {
      return `5px !important;`;
    }
  }}
  line-height: ${props => {
    if (props.tableType === 'modal' || props.tableType === 'sidePanel') {
      return `normal;`;
    } else {
      return `1;`;
    }
  }}
  border: ${props => {
    if (props.tableType === 'modal' || props.tableType === 'sidePanel') {
      return `inherit;`;
    } else {
      return `none !important;`;
    }
  }}
  width: ${props => {
    if (props.tableType === 'modal' || props.tableType === 'sidePanel') {
      return `100%;`;
    } else {
      return `auto;`;
    }
  }}
`;

function FilterSelect(props) {
  return (
    <StyledSelector
      tableType={props.tableType}
      onChange={props.onChange}
      className={props.className}
      defaultValue={props.defaultValue}
      value={props.value}
    >
      {props.options.map(value => (
        <option
          key={camelCaseToRegularForm(value)}
          value={value}
          className={'subentity-filter-column-option-' + value}
        >
          {camelCaseToRegularForm(value)}
        </option>
      ))}
    </StyledSelector>
  );
}

FilterSelect.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  tableType: PropTypes.string,
};

export default FilterSelect;
