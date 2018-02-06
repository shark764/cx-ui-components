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
import styled, { css } from 'styled-components';

import FontAwesomeIcon from '../FontAwesomeIcon';

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Switch = styled.input`
  display: none;
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  ${Switch}:checked + & {
    background-color: #2196F3;
  }

  ${Switch}:focus + & {
    box-shadow: 0 0 1px #2196F3;
  }

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
    ${Switch}:checked + & {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
  }
`

function Toggle(props) {
  return (
    <StyledLabel
      id={props.id}
      className={props.className}
    >
      <Switch type='checkbox' checked={props.value} onChange={props.onChange} disabled={props.disabled} />
      <Slider class='slider round' />
    </StyledLabel>
  );
}

Toggle.propTypes = {
  id: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Toggle;
