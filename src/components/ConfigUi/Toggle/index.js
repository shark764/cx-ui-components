/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * Toggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Switch = styled.input`
  display: none;
`;

const Slider = styled.span`
  position: absolute;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 28px;
  width: 53px;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  ${Switch}:checked + & {
    background-color: #54B84F;
  }

  ${Switch}:focus + & {
    box-shadow: 0 0 1px #2196f3;
  }

  &:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    ${Switch}:checked + & {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
`;

function Toggle(props) {
  return (
    <StyledLabel id={props.id} className={props.className}>
      <Switch
        type="checkbox"
        checked={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <Slider class="slider round" disabled={props.disabled} />
    </StyledLabel>
  );
}

Toggle.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Toggle;
