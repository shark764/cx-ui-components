/*
 * Copyright © 2015-2019 Serenova, LLC. All rights reserved.
 */

/**
 *
 * Menu Row
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import CheckedIconSVG from '../../../Icons/CheckedIconSVG';
import PresenceStateIconSVG from '../../../Icons/PresenceStateIconSVG';

const StatusCheckedIconSVG = styled(CheckedIconSVG)`
  float: right;
  align-self: center;
  cursor: inherit;
`;
const SubMenuOuterContainer = styled.div`
  position: relative;
`;
const SubMenuContainer = styled.div`
  position: absolute;
  top: -5px;
  left: 303px;
  width: 303px;
  background-color: #ffffff;
  border-radius: 3px;
  padding: 5px 0;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.29);
`;
const RowText = styled.div`
  flex-grow: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  margin-left: 6px;
`;
const MainRow = styled.div`
  display: flex;
  padding: 3px 24px;
  cursor: pointer;

  &:hover {
    background-color: darkslategray;
  }
  ${props =>
    props.isRowSelected &&
    css`
      font-weight: bold;
      cursor: not-allowed;
      &:hover {
        background-color: transparent;
      }
    `};
  ${props =>
    props.isRowDisabled &&
    css`
      cursor: not-allowed;
      color: #979797;
      &:hover {
        background-color: transparent;
      }
    `};
  ${props =>
    props.isRowOpen &&
    css`
      background-color: darkslategray;
    `};
`;

function MenuRow(props) {
  const allowSelect = !props.isSelected && !props.disabled;
  const mainRow = (
    <MainRow
      id={props.id}
      className={props.className}
      isRowSelected={props.isSelected}
      isRowDisabled={props.disabled}
      isRowOpen={props.isOpen}
      onClick={allowSelect ? props.onSelect : undefined}
    >
      <PresenceStateIconSVG presenceStateIconType="notready" presenceStateMode="notready" size={25} />
      <RowText title={props.rowText}>{props.rowText}</RowText>
      {props.isSelected && <StatusCheckedIconSVG size={17} alt="selected" fillColor="white" />}
      {props.hasSubMenu && <div>{'&#9658;'}</div>}
    </MainRow>
  );
  if (!props.hasSubMenu) {
    return mainRow;
  }
  return (
    <SubMenuOuterContainer>
      {mainRow}
      {props.isOpen && <SubMenuContainer>{props.subMenuRows}</SubMenuContainer>}
    </SubMenuOuterContainer>
  );
}

MenuRow.propTypes = {
  id: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  rowText: PropTypes.string.isRequired,
  hasSubMenu: PropTypes.bool,
  subMenuRows: PropTypes.array,
  onSelect: PropTypes.func,
  isSelected: PropTypes.bool,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MenuRow;
