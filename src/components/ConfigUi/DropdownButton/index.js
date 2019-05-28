/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * DropdownButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import CaretIconSVG from '../../SVGs/CaretIconSVG';

const DropdownIcon = styled(CaretIconSVG)`
  width: 10px;
  margin-left: 15px;
  float: right;
`;

function DropdownButton(props) {
  return (
    <Button
      id={props.id}
      type={props.type}
      className={props.className}
      buttonType={props.buttonType}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <span>{props.children}</span>
      <DropdownIcon size={props.size} direction={props.open ? 'up' : 'down'} />
    </Button>
  );
}

DropdownButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'columnFilter', 'checkboxField', 'selector']),
  disabled: PropTypes.bool,
  /** Text or icon to go inside the button */
  children: PropTypes.any,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.number,
};

export default DropdownButton;
