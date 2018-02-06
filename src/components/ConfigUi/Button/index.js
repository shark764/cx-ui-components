/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import FontAwesomeIcon from '../FontAwesomeIcon';

const StyledButton = styled.button`
  font-size: 14px;
  padding: 7px 15px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;

  ${props => props.type === 'primary' && css`
    color: white;
    background-color: ${props => props.theme.primaryColor};

    &:not([disabled]):hover {
      color: #CCCCCC;
    }
  `}

  ${props => props.type === 'secondary' && css`
    color: ${props => props.theme.primaryColor};
    background-color: white;

    &:not([disabled]):hover {
      box-shadow: inset 0px 1px 2px rgba(175, 175, 175, 0.4);
    }
  `}

  ${props => props.disabled && css`
    color: #999999;
    border-color: #d4d4d4;
    opacity: 0.8;
    cursor: default;
  `}
`;

function Button(props) {
  return (
    <StyledButton
      id={props.id}
      className={props.className}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.inner}
    </StyledButton>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  /** Text or icon to go inside the button */
  inner: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;
