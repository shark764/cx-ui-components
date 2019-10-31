/*
 * Copyright © 2015-2019 Serenova, LLC. All rights reserved.
 */

/**
 *
 * DetailsPanelMessage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  padding-top: 15px;
  width: 100%;
`;
const Message = styled.p`
  color: ${props => messageColor(props.type)};
  font-style: italic;
  font-size: 14px;
  width: 100%;
  text-align: center;
`;

const messageColor = type => {
  switch (type) {
    case 'info':
      return '#3498db';
    case 'success':
      return '#54b84f';
    case 'warning':
      return '#f58c00';
    case 'error':
      return 'red';
    case 'default':
    default:
      return '#656565';
  }
};

function DetailsPanelMessage(props) {
  return (
    <Wrapper id={props.id} className={props.className}>
      <Message type={props.type}>{props.text}</Message>
    </Wrapper>
  );
}

DetailsPanelMessage.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'info', 'success', 'error', 'warning']),
};

DetailsPanelMessage.defaultProps = {
  type: 'default',
};

export default DetailsPanelMessage;
