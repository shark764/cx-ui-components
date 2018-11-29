/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

/**
 *
 * FilterInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
`;

function FilterInput(props) {
  return (
    <StyledInput
      onChange={props.onChange}
      className={props.className}
      defaultValue={props.defaultValue}
      value={props.value}
    />
  );
}

FilterInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string
};

export default FilterInput;
