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
  display: grid;
  grid-template-columns: ${props => (props.hasToggle ? '75px' : '')} auto ${props => (props.hasToggle ? '40px ' : '')};
  grid-template-rows: ${props => (props.hasCreatedUpdatedAt ? '70px' : '40px')};
  grid-template-areas:
    "${props => (props.hasToggle ? 'toggle' : '')} header ${props => (props.hasToggle ? 'close ' : '')}";
`;

const StyledToggle = styled(Toggle)`
  grid-area: toggle;
  margin-top: 15px;
`;

const HeaderArea = styled.div`
  grid-area: header;
  overflow: hidden;
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
  grid-area: header;
  color: #999999;
  font-size: 10px;
  padding-bottom: 4px;
`;

const LeftArea = styled.div`
  grid-area: close;
`;

const CloseIcon = styled(FontAwesomeIcon)`
  float: right;
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
      hasToggle={props.toggleStatus !== undefined}
      hasClose={props.onClose !== undefined}
      hasCreatedUpdatedAt={props.createdAt || props.updatedAt}
    >
      {props.toggleStatus !== undefined && (
        <StyledToggle value={props.toggleStatus} onChange={props.onToggle} />
      )}
      <HeaderArea>
        <Header>{props.title}</Header>
        {props.createdAt && <SubHeader>{props.createdAt}</SubHeader>}
        {props.createdAt && <SubHeader>{props.updatedAt}</SubHeader>}
      </HeaderArea>
      {props.onClose !== undefined &&
        <LeftArea>
          <CloseIcon
            name={'times'}
            size={20}
            alt="close menu"
            title="close"
            onClick={props.onClose}
          />
        </LeftArea>}
    </Wrapper>
  );
}

SidePanelHeader.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  toggleStatus: PropTypes.bool,
  onToggle: PropTypes.func,
  onClose: PropTypes.func,
};

export default SidePanelHeader;
