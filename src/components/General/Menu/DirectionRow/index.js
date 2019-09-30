/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { capitalizeFirstLetter } from 'serenova-js-utils/strings';

import CheckedIconSVG from '../../../Icons/CheckedIconSVG';
import DirectionIconSVG from '../../../Icons/DirectionIconSVG';

const DirectionRowContainer = styled.div`
  padding: 5px 25px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

  &:not([disabled]):hover {
    background-color: darkslategray;
    cursor: pointer;
  }
`;

const StatusCheckedIconSVG = styled(CheckedIconSVG)`
  float: right;
`;

function DirectionRow({ direction, label, isSelectedDirection, onSelect, className }) {
  return (
    <DirectionRowContainer
      id={`agentDirection${capitalizeFirstLetter(direction)}`}
      className={className}
      disabled={isSelectedDirection}
      onClick={!isSelectedDirection ? onSelect : undefined}
    >
      <DirectionIconSVG directionIconType="secondary" directionMode={direction} size={25} fillColor="white" /> {label}
      {isSelectedDirection && <StatusCheckedIconSVG size={17} alt="selected" fillColor="white" />}
    </DirectionRowContainer>
  );
}

DirectionRow.propTypes = {
  direction: PropTypes.string.isRequired,
  label: PropTypes.string,
  isSelectedDirection: PropTypes.bool,
  onSelect: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default DirectionRow;
