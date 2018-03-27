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
      {props.userHasUpdatePermission && props.children}
      <Detail
        label="List Type" value={props.listType}
      />
      <DetailHeader
        userHasUpdatePermission={props.userHasUpdatePermission}
        text="List Item(s)"
        onActionButtonClick={props.openCreateListItemModal}
        inherited={props.inherited}
      />
      <SidePanelTable
        userHasUpdatePermission={props.userHasUpdatePermission}
        items={props.tableItems}
        fields={props.tableFields}
        updateSubEntity={props.updateSubEntity}
        deleteSubEntity={props.deleteSubEntity}
        listIsInherited={props.listIsInherited}
      />
    </div>
  );
}

ListsDetailsPanel.propTypes = {
  userHasUpdatePermission: PropTypes.bool,
  listIsInherited: PropTypes.bool,
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
  inherited: PropTypes.bool,
};

export default ListsDetailsPanel;
