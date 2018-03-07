/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * FilterSelect
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSelector = styled.select`
  padding: 5px !important;
  line-height: 1;
  border: none !important;
`;

export default function FilterSelect(props) {
  return (
    <StyledSelector 
      onChange={props.onChange}
      className={props.className}
    >
      {props.options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </StyledSelector>
  );
}

FilterSelect.propTypes = {
  className: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
