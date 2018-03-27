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
import FontAwesomeIcon from '../FontAwesomeIcon';

const Wrapper = styled.div`
  display: flex;
`;

const StyledToggle = styled(Toggle)`
  margin: 9px 9px 0px 0px;
`;

const HeaderArea = styled.div`
  margin-bottom: 5px;
  height: 100px;
`;

const Header = styled.h1`
  color: #474747;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 400px;
`;

const SubHeader = styled.h5`
  font-family: Arial, Helvetica, sans-serif;
  color: #999999;
  font-size: 10px;
  padding-bottom: 4px;
`;



const CloseIcon = styled(FontAwesomeIcon)`
  margin-top: 5px;
  color: #999999;
  cursor: pointer;
  position: absolute;
  right: 10px;
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
      props.userHasUpdatePermission &&
      (
        <StyledToggle value={props.toggleStatus} onChange={props.onToggle} inherited={props.inherited}/>
      )}
      <HeaderArea>
        <Header title={props.title}>{props.title}</Header>
        {props.createdAt && <SubHeader>{props.createdAt}</SubHeader>}
        {props.createdAt && <SubHeader>{props.updatedAt}</SubHeader>}
      </HeaderArea>
      {props.onClose !== undefined &&
          <CloseIcon
            name={'times'}
            size={25}
            alt="close menu"
            title="close"
            onClick={props.onClose}
          />
      }
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
