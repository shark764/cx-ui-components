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

import Detail from '../Detail';
import DetailHeader from '../DetailHeader';
import DetailsPanelAlert from '../DetailsPanelAlert';
import SidePanelTable from '../SidePanelTable';

function ListsDetailsPanel(props) {
  return (
    <div id={props.id} className={props.className}>
      <DetailHeader text='Details' />
      {props.alertMessage && <DetailsPanelAlert text={props.alertMessage} />}
      <Detail label='Name' value={props.name} />
      <Detail label='Description' value={props.description} />
      <DetailHeader text='List Item(s)' />
      <SidePanelTable data={props.tableData} columns={props.tableColumns} />
    </div>
  );
}

ListsDetailsPanel.propTypes = {
  id: PropTypes.string,
  /** Alert Message will only shown when this prop is used */
  alertMessage: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  tableData: PropTypes.array,
  tableColumns: PropTypes.array,
}

export default ListsDetailsPanel;
