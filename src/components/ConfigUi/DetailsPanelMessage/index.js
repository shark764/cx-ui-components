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
${props =>
  props.type === 'info' &&
  css`
    color: #3498db;
  `}
${props =>
  props.type === 'success' &&
  css`
    color: #54b84f;
  `}
${props =>
  props.type === 'error' &&
  css`
    color: red;
  `}
${props =>
  props.type === 'warning' &&
  css`
    color: #656565;
  `}

  font-style: italic;
  font-size: 14px;
  width: 100%;
  text-align: center;
`;

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
  type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
};

DetailsPanelMessage.defaultProps = {
  type: 'info',
};

export default DetailsPanelMessage;
