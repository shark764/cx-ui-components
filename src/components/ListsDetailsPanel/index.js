/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * ListsDetailsPanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Detail, DetailHeader, DetailsPanelAlert } from '../../';

function ListsDetailsPanel(props) {
  return (
    <div id={props.id} className={props.className}>
      {props.alertMessage && <DetailsPanelAlert text={props.alertMessage} />}
      <DetailHeader text='Details' />
      <Detail label='Name' value={props.name} />
      <Detail label='Description' value={props.description} />
      <DetailHeader text='List Item(s)' />
      <p>NEW TABLE GOES HERE</p>
    </div>
  );
}

ListsDetailsPanel.propTypes = {
  id: PropTypes.string,
  /** Alert Message will only shown when this prop is used */
  alertMessage: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default ListsDetailsPanel;
