/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { capitalizeFirstLetter } from 'serenova-js-utils/strings';

import CheckedIconSVG from '../../../SVGs/CheckedIconSVG';
import PresenceStateIconSVG from '../../../SVGs/PresenceStateIconSVG';

import SimpleCaretIconSVG from '../../../SVGs/SimpleCaretIconSVG';

const FrontCaret = styled(SimpleCaretIconSVG)`
  float: right;
  margin-top: 2px;
`;

const PresenceStateRowContainer = styled.div`
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

function PresenceStateRow({ presenceState, label, isSelectedPresenceState, onSelect, className }) {
  const notReadySelectable = isSelectedPresenceState && presenceState !== 'notready';
  return (
    <PresenceStateRowContainer
      id={`agentPresenceState${capitalizeFirstLetter(presenceState)}`}
      className={className}
      disabled={notReadySelectable}
      onClick={!isSelectedPresenceState || presenceState === 'notready' ? onSelect : undefined}
    >
      <PresenceStateIconSVG presenceStateIconType={presenceState} presenceStateMode={presenceState} size={25} /> {label}
      {notReadySelectable && <StatusCheckedIconSVG size={17} alt="selected" fillColor="white" />}
      {presenceState === 'notready' && <FrontCaret direction="right" size={13.33} fillColor="white" />}
    </PresenceStateRowContainer>
  );
}

PresenceStateRow.propTypes = {
  presenceState: PropTypes.string.isRequired,
  label: PropTypes.string,
  isSelectedPresenceState: PropTypes.bool,
  onSelect: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default PresenceStateRow;
