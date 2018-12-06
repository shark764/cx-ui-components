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
import { importantCss, convertFieldsToColumns } from '../../../utils';
import { filterDefaultMethod } from '../../../utils/filterMethod';
import LoadingSpinner from '../../SVGs/LoadingSpinnerSVG';

import DynamicTableWrapper from '../DynamicTableWrapper';

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
`)}`;

export default DynamicTableWrapper(SidePanelTable);

function SidePanelTable(props) {
  const columns = [...convertFieldsToColumns(props.fields, props.tableType)];
  if (props.updateSubEntity || props.deleteSubEntity || props.addSubEntity) {
    columns.push({
      id: 'actions',
      Header: 'Actions',
      filterable: false,
      sortable: false,
      accessor: d => (
        <SidePanelTableActions
          row={d}
          entityName={props.contains}
          updateSubEntity={props.updateSubEntity}
          deleteSubEntity={props.deleteSubEntity}
          addSubEntity={props.addSubEntity}
          toggleSubEntityActive={props.toggleSubEntityActive}
        />
      ),
      width: 90,
      show: props.userHasUpdatePermission && !props.inherited
    });
  }
  return (
    <ReactTable
      data={props.items}
      noDataText={
        props.fetching ? <LoadingSpinner size={60} /> : 'No results found'
      }
      columns={columns}
      defaultPageSize={5}
      pageSizeOptions={props.pageSizeOptions}
      pageSize={props.pageSize}
      onPageSizeChange={pageSize =>
        props.setPageSize(pageSize, props.items.length)
      }
      showPagination={props.pagination}
      className="-striped SidePanelTable"
      defaultFilterMethod={(filter, row) => filterDefaultMethod(filter, row)}
      filtered={props.filtered}
      onFilteredChange={filtered => props.onFilteredChange(filtered)}
    />
  );
}

SidePanelTable.propTypes = {
  userHasUpdatePermission: PropTypes.bool,
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
  updateSubEntity: PropTypes.func,
  deleteSubEntity: PropTypes.func,
  addSubEntity: PropTypes.func,
  toggleSubEntityActive: PropTypes.func,
  pageSize: PropTypes.number,
  setPageSize: PropTypes.func,
  filtered: PropTypes.array
};

SidePanelTable.defaultProps = {
  pagination: true
};
