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
import FontAwesomeIcon from '../FontAwesomeIcon';

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
  background-color: #F9F9F9;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  color: #07487a;
  cursor: pointer;
  font-size: 14px;
  margin-top: -2px;
  padding: 3px 10px;

  :hover {
    box-shadow: inset 0px 1px 2px rgba(175, 175, 175, 0.4);
  }
`;

function DetailHeader(props) {
  return (
    <Wrapper id={props.id} className={props.className}>
      <Header>
        {props.text}
      </Header>
      <LineSpacer />
      {props.onActionButtonClick &&
        <ActionButton onClick={props.onActionButtonClick}>
          <FontAwesomeIcon name="plus" />
        </ActionButton>}
    </Wrapper>
  );
}

DetailHeader.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  onActionButtonClick: PropTypes.func,
};

export default DetailHeader;
