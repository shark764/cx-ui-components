/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
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

// React-Table does not integrate well with Styled components
// We will be writing table style overrides here
// We will use a new class name to make these styles component specific
injectGlobal`${importantCss(`
  .SidePanelTable .rt-thead .rt-th {
    color: #656565;
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    border: none;

    :not(.rt-resizable-header) {
      padding-left: 5px;
      margin-bottom 5px;
    }
  }

  .SidePanelTable .rt-tbody .rt-tr-group {
    border: none;
    height: 55px;
    max-height: 55px;

    &:hover {
      background-color: #e6f5ff;
    }
  }

  .SidePanelTable abbr {
    text-decoration: none;
  }

  .SidePanelTable .rt-tbody .rt-td {
    padding: 10px;
    font-size: 14px;
    text-align: left;
    border: none;
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

function SidePanelTable(props) {
  return (
    <ReactTable
      data={props.items}
      columns={[
          ...convertFieldsToColumns(props.fields),
          {
            id: 'actions',
            Header: 'Actions',
            filterable: false,
            sortable: false,
            accessor: d => <SidePanelTableActions row={d} updateSubEntity={props.updateSubEntity} deleteSubEntity={props.deleteSubEntity} />,
            width: 90,
            show: props.userHasUpdatePermission && !props.listIsInherited
          }
      ]}
      defaultPageSize={10}
      className="-striped SidePanelTable"
      defaultFilterMethod={(filter, row) =>
        String(row[filter.id])
          .toLowerCase()
          .indexOf(filter.value.toLowerCase()) > -1
      }
    />
  );
}

SidePanelTable.propTypes = {
  userHasUpdatePermission: PropTypes.bool,
  listIsInherited: PropTypes.bool,
  id: PropTypes.string,
  /** Must be a javascipt arr for React-table */
  items: PropTypes.array.isRequired,
  /** Must be a javascipt arr for React-table */
  fields: PropTypes.array.isRequired,
  updateSubEntity: PropTypes.func,
  deleteSubEntity: PropTypes.func,
};

export default SidePanelTable;
