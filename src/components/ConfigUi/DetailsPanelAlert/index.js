/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * DetailsPanelAlert
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Alert = styled.p`
  margin: 10px 0;
  padding: 10px;
  color: #07487a;
  background-color: #e6f5ff;
  border: 2px solid #3498db;
  border-radius: 5px;
  font-size: 14px;
`;

function DetailsPanelAlert(props) {
  return (
    <Alert data-automation="detailsPanelAlertText" id={props.id} className={props.className}>
      {props.text}
    </Alert>
  );
}

DetailsPanelAlert.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  'data-automation': PropTypes.string,
};

export default DetailsPanelAlert;
