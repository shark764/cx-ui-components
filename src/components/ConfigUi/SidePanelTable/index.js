/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

/**
 *
 * SidePanelTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import SidePanelTableActions from '../SidePanelTableActions';
import { importantCss, convertFieldsToColumns, getClosestHighestValues } from '../../../utils';
import { filterDefaultMethod } from '../../../utils/filterMethod';
import LoadingSpinner from '../../Icons/LoadingSpinnerSVG';

import DynamicTableWrapper from '../DynamicTableWrapper';
import Pagination from '../EntityTable/Pagination';

// React-Table does not integrate well with Styled components
// We will be writing table style overrides here
// We will use a new class name to make these styles component specific
injectGlobal`${importantCss(`

  .SidePanelTable .rt-table {
    overflow: auto;
  }

  .SidePanelTable .rt-thead .rt-th {
    color: #656565;
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    border: none;
    min-width: 100px;

    :not(.rt-resizable-header) {
      padding-left: 5px;
      margin-bottom 5px;
    }
  }

  .SidePanelTable .rt-tbody .rt-tr-group {
    border: none;
    height: 40px;
    max-height: 40px;

    &:hover {
      background-color: #e6f5ff;
    }
  }

  .SidePanelTable .rt-tbody .rt-td {
    padding: 10px;
    font-size: 14px;
    text-align: left;
    border: none;
    min-width: 100px;
  }

  .SidePanelTable .rt-tbody {
    overflow: initial;
  }

  .SidePanelTable .rt-thead {
    box-shadow: none;
    border-bottom: 1px solid #e6e6e6;
  }

  .SidePanelTable .-pagination {
    box-shadow: none;
    border-top: 1px solid #e6e6e6;
  }

  .SidePanelTable .-pagination .-center {
    -ms-flex: inherit;
    flex: inherit;
  }
`)}`;

export default DynamicTableWrapper(SidePanelTable);

function SidePanelTable(props) {
  const columns = [...convertFieldsToColumns(props.fields, props.tableType)];
  const actions = [
    props.viewSubEntity,
    props.updateSubEntity,
    props.deleteSubEntity,
    props.addSubEntity,
    props.copySubEntity,
  ].filter(a => a !== undefined);
  if (actions.length && (((props.userHasUpdatePermission || props.userHasViewPermission) && !props.inherited) || (props.inherited || props.showInheritedViewOnlyViewButtonOnItem || props.showInheritedViewOnlyCopyButtonOnItem))) {
    columns.push({
      id: 'actions',
      Header: <span title={`${props.actionHeaderMessage || 'Actions'}`}>{`${props.actionHeaderMessage || 'Actions'}`}</span>,
      filterable: false,
      sortable: false,
      accessor: d =>
        props.userHasUpdatePermission ? (
          <SidePanelTableActions
            row={d}
            entityName={props.contains}
            viewSubEntity={props.viewSubEntity}
            updateSubEntity={props.updateSubEntity}
            deleteSubEntity={props.deleteSubEntity}
            confirmDeleteSubEntity={props.confirmDeleteSubEntity}
            addSubEntity={props.addSubEntity}
            copySubEntity={props.copySubEntity}
            toggleSubEntityActive={props.toggleSubEntityActive}
            itemApiPending={props.itemApiPending}
            shouldShowAddButtonOnItem={props.shouldShowAddButtonOnItem}
            shouldShowActiveToggleOnItem={props.shouldShowAddButtonOnItem}
            shouldShowCopyButtonOnItem={props.shouldShowCopyButtonOnItem}
            shouldShowDeleteButtonOnItem={props.shouldShowDeleteButtonOnItem}
            shouldShowUpdateButtonOnItem={props.shouldShowUpdateButtonOnItem}
            shouldShowViewButtonOnItem={props.shouldShowViewButtonOnItem}
            showInheritedViewOnlyViewButtonOnItem={props.showInheritedViewOnlyViewButtonOnItem}
            showInheritedViewOnlyCopyButtonOnItem={props.showInheritedViewOnlyCopyButtonOnItem}
            isMainEntityInherited={props.inherited}
          />
        ) : (
          <SidePanelTableActions
            row={d}
            entityName={props.contains}
            viewSubEntity={props.viewSubEntity}
            itemApiPending={props.itemApiPending}

          />
        ),
      width: actions.length > 2 && props.userHasUpdatePermission ? 130 : 90,
    });
  }
  return (
    <ReactTable
      PaginationComponent={Pagination}
      data={props.items}
      noDataText={props.fetching ? <LoadingSpinner size={60} /> : 'No results found'}
      columns={columns}
      defaultPageSize={5}
      pageSizeOptions={getClosestHighestValues(props.pageSizeOptions, props.items.length)}
      pageSize={props.pageSize}
      onPageSizeChange={pageSize => props.setPageSize(pageSize, props.items.length)}
      showPagination={props.pagination}
      className="-striped SidePanelTable"
      defaultFilterMethod={(filter, row) => filterDefaultMethod(filter, row)}
      filtered={props.filtered}
      onFilteredChange={filtered => props.onFilteredChange(filtered)}
      defaultSorted={props.defaultSorted || [{ id: 'name', desc: true }]}
      minRows={5}
      emptyRowsWhenPaging={false}
    />
  );
}

SidePanelTable.propTypes = {
  userHasUpdatePermission: PropTypes.bool,
  userHasViewPermission: PropTypes.bool,
  inherited: PropTypes.bool,
  onFilteredChange: PropTypes.func,
  fetching: PropTypes.bool,
  tableType: PropTypes.string,
  contains: PropTypes.string,
  pageSizeOptions: PropTypes.array,
  id: PropTypes.string,
  /** Must be a javascipt arr for React-table */
  items: PropTypes.array.isRequired,
  /** Must be a javascipt arr for React-table */
  fields: PropTypes.array.isRequired,
  pagination: PropTypes.bool,
  viewSubEntity: PropTypes.func,
  updateSubEntity: PropTypes.func,
  deleteSubEntity: PropTypes.func,
  confirmDeleteSubEntity: PropTypes.bool,
  addSubEntity: PropTypes.func,
  copySubEntity: PropTypes.func,
  toggleSubEntityActive: PropTypes.func,
  pageSize: PropTypes.number,
  setPageSize: PropTypes.func,
  filtered: PropTypes.array,
  itemApiPending: PropTypes.string,
  defaultSorted: PropTypes.any,
  shouldShowViewButtonOnItem: PropTypes.func,
  shouldShowUpdateButtonOnItem: PropTypes.func,
  shouldShowDeleteButtonOnItem: PropTypes.func,
  shouldShowCopyButtonOnItem: PropTypes.func,
  shouldShowAddButtonOnItem: PropTypes.func,
  shouldShowActiveToggleOnItem: PropTypes.func,
  showInheritedViewOnlyViewButtonOnItem: PropTypes.bool,
  showInheritedViewOnlyCopyButtonOnItem: PropTypes.bool,
  actionHeaderMessage: PropTypes.string
};

SidePanelTable.defaultProps = {
  pagination: true,
  confirmDeleteSubEntity: false,
};