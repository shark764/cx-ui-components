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

const StyledButton = styled.button`
  font-size: 14px;
  padding: 7px 15px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;

  ${props =>
    props.buttonType === 'primary' &&
    css`
      color: white;
      background-color: ${props => props.theme.primaryColor};

      &:not([disabled]):hover {
        color: #cccccc;
      }
    `}

  ${props =>
    props.buttonType === 'secondary' &&
    css`
      color: ${props => props.theme.primaryColor};
      background-color: white;

      &:not([disabled]):hover {
        box-shadow: inset 0px 1px 2px rgba(175, 175, 175, 0.4);
      }
    `}

  ${props =>
    props.buttonType === 'columnFilter' &&
    css`
      color: ${props => props.theme.primaryColor};
      border: 1px solid rgba(0, 0, 0, 0.1);
      background: #fff;
      width: 100%;
      text-align: left;
      padding: 5px 15px;
      font-size: inherit;
      border-radius: 3px;
      font-weight: normal;
      outline: none;

      &:not([disabled]):hover {
        box-shadow: inset 0px 1px 2px rgba(175, 175, 175, 0.4);
      }
    `}

    ${props =>
      props.buttonType === 'checkboxField' &&
      css`
        width: 100%;
        height: 32px;
        text-align: left;
        padding: 0px 5px 0px 10px;
        font-size: 13px;
        border: 1px solid;
        border-radius: initial;
        border-color: transparent;
        background-color: inherit;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset, 0 -1px 0 rgba(0, 0, 0, 0.05) inset;
      `}

  ${props =>
    props.disabled &&
    css`
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
      data-automation={props['data-automation']}
      className={props.className}
      buttonType={props.buttonType}
      type={props.type}
      disabled={props.disabled}
      title={props.title}
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
    >
      {props.children}
    </StyledButton>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  'data-automation': PropTypes.string,
  className: PropTypes.string,
  /**
   * Possible options are primary, secondary, columnFilter.
   */
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'columnFilter', 'checkboxField', 'selector']),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  /** Text or icon to go inside the button */
  children: PropTypes.any,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
};

Button.defaultProps = {
  buttonType: 'secondary',
};

export default Button;
