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
  margin-left: 5px;
`

function DropdownButton(props) {
  return (
    <Button
      id={props.id}
      className={props.className}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      style={props.style}
    >
      <span>{props.children} |</span>
      <DropdownIcon
        direction={props.open ? 'up' : 'down'}
      />
    </Button>
  );
}

DropdownButton.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  /** Text or icon to go inside the button */
  children: PropTypes.any,
  onClick: PropTypes.func,
  open: PropTypes.bool,
};

export default DropdownButton;
