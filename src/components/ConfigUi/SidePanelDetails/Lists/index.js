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

import Detail from '../../Detail';
import DetailHeader from '../../DetailHeader';
import DetailsPanelAlert from '../../DetailsPanelAlert';
import SidePanelTable from '../../SidePanelTable';

function ListsDetailsPanel(props) {
  return (
    <div id={props.id} className={props.className}>
      <DetailHeader text="Details" />
      {props.alertMessage && <DetailsPanelAlert text={props.alertMessage} />}
      {props.children}
      <Detail label="List Type" value={props.listType} />
      <DetailHeader text="List Item(s)" onActionButtonClick={props.openCreateListItemModal} />
      <SidePanelTable items={props.tableItems} fields={props.tableFields} updateSubEntity={props.updateSubEntity} deleteSubEntity={props.deleteSubEntity} />
    </div>
  );
}

ListsDetailsPanel.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  /** Alert Message will only shown when this prop is used */
  alertMessage: PropTypes.string,
  children: PropTypes.node.isRequired,
  listType: PropTypes.string,
  tableItems: PropTypes.array.isRequired,
  tableFields: PropTypes.array.isRequired,
  openCreateListItemModal: PropTypes.func.isRequired,
  updateSubEntity: PropTypes.func.isRequired,
  deleteSubEntity: PropTypes.func.isRequired,
};

export default ListsDetailsPanel;
