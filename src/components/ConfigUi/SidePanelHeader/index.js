/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * SidePanelHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Toggle from '../Toggle';
import CloseIconSVG from '../../SVGs/CloseIconSVG';

const Wrapper = styled.div`
  display: flex;
`;

const StyledToggle = styled(Toggle)`
  margin: 9px 9px 0px 0px;
  flex-shrink: 0;
`;

const HeaderArea = styled.div`
  flex-grow: 1;
  min-width: 0;
  margin: 0 14px 5px 0;
`;

const Header = styled.h1`
  color: #474747;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SubHeader = styled.h5`
  font-family: Arial, Helvetica, sans-serif;
  color: #999999;
  font-size: 10px;
  padding-bottom: 4px;
`;

const CloseIconOuterBox = styled.div`
  margin-top: 5px;
  color: #999999;
  cursor: pointer;
  :hover {
    color: #656565;
  }
`;

function SidePanelHeader(props) {
  return (
    <Wrapper
      id={props.id}
      className={props.className}
      hasToggle={props.userHasUpdatePermission}
      hasClose={props.onClose !== undefined}
      hasCreatedUpdatedAt={props.createdAt || props.updatedAt}
    >
      {props.toggleStatus !== undefined &&
        props.userHasUpdatePermission && (
          <StyledToggle value={props.toggleStatus} onChange={props.onToggle} inherited={props.inherited} />
        )}
      <HeaderArea>
        <Header title={props.title}>{props.title}</Header>
        {props.createdAt && <SubHeader>{props.createdAt}</SubHeader>}
        {props.createdAt && <SubHeader>{props.updatedAt}</SubHeader>}
      </HeaderArea>
      {props.onClose !== undefined && (
        <CloseIconOuterBox>
          <CloseIconSVG size={17} alt="close menu" title="close" closeIconType="secondary" onClick={props.onClose} />
        </CloseIconOuterBox>
      )}
    </Wrapper>
  );
}

SidePanelHeader.propTypes = {
  userHasUpdatePermission: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  toggleStatus: PropTypes.bool,
  onToggle: PropTypes.func,
  onClose: PropTypes.func,
  inherited: PropTypes.bool,
};

export default SidePanelHeader;
