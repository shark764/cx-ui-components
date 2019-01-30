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
import { colors } from '../../../constants';

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 14px;
`;

const Switch = styled.input`
  display: none;
`;

const Slider = styled.span`
  position: absolute;
  cursor: ${props =>
    props.disabled || props.inherited ? 'not-allowed' : 'pointer'};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 20px;
  width: 40px;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  ${Switch}:checked + & {
    background-color: ${props =>
      props.disabled || props.inherited
        ? colors.toggleCheckedDisabled
        : colors.toggleChecked};
  }

  ${Switch}:focus + & {
    box-shadow: 0 0 1px #2196f3;
  }

  &:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    ${Switch}:checked + & {
      -webkit-transform: translateX(20px);
      -ms-transform: translateX(20px);
      transform: translateX(20px);
    }
  }
`;

function Toggle(props) {
  return (
    <StyledLabel id={props.id} className={props.className} title={props.title}>
      <Switch
        type="checkbox"
        checked={props.value}
        onChange={!props.disabled && !props.inherited && props.onChange}
        disabled={props.disabled}
        inherited={props.inherited}
      />
      <Slider
        class="slider round"
        disabled={props.disabled || props.inherited}
      />
    </StyledLabel>
  );
}

Toggle.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  inherited: PropTypes.bool,
  title: PropTypes.string
};

export default Toggle;
