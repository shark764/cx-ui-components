/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * DetailHeader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlusIconSVG from '../../SVGs/PlusIconSVG';

const Wrapper = styled.div`
  display: flex;
  margin: 15px 0;
`;

const Header = styled.h4`
  font-size: 14px;
  font-weight: 700;
`;

const LineSpacer = styled.div`
  border-top: 1px solid #dadada;
  flex-grow: 1;
  margin: 10px 10px 0;
`;

const ActionButton = styled.button`
  background-color: #f9f9f9;
  border: 1px solid #cccccc;
  border-radius: 4px;
  color: #07487a;
  cursor: pointer;
  font-size: 14px;
  margin-top: -2px;
  padding: 3px 10px;
  min-height: 26px;
  :hover {
    box-shadow: inset 0px 1px 2px rgba(175, 175, 175, 0.4);
  }
`;

function DetailHeader(props) {
  return (
    <Wrapper id={props.id} className={props.className}>
      <Header>{props.text}</Header>
      <LineSpacer />
      {props.onActionButtonClick &&
        props.userHasUpdatePermission &&
        !props.inherited &&
        props.open && (
          <ActionButton onClick={props.onActionButtonClick} id="sdpanel-add-item">
            <PlusIconSVG size={12} />
          </ActionButton>
        )}
    </Wrapper>
  );
}

DetailHeader.propTypes = {
  className: PropTypes.string,
  userHasUpdatePermission: PropTypes.bool,
  open: PropTypes.bool,
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  onActionButtonClick: PropTypes.func,
  inherited: PropTypes.bool,
};

export default DetailHeader;
