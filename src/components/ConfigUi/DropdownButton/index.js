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
import SimpleCaretIconSVG from '../../SVGs/SimpleCaretIconSVG';
import FilterIconSVG from '../../SVGs/FilterIconSVG';

const DropdownFilterIcon = styled(FilterIconSVG)`
  margin-left: 5px;
  float: right;
`;
const DropdownIcon = styled(SimpleCaretIconSVG)`
  width: 10px;
  margin-left: 5px;
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
      {props.buttonType === 'columnFilter' && props.hasActiveFilter && <DropdownFilterIcon size={15} />}
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
  hasActiveFilter: PropTypes.bool,
};

export default DropdownButton;
