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
  }

  .SidePanelTable .rt-tbody .rt-tr-group {
    border: none;

    &:hover {
      background-color: #e6f5ff;
    }
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
      columns={convertFieldsToColumns(props.fields, props.updateSubEntity)}
      defaultPageSize={10}
      className="-striped SidePanelTable"
    />
  );
}

SidePanelTable.propTypes = {
  id: PropTypes.string,
  /** Must be a javascipt arr for React-table */
  items: PropTypes.array.isRequired,
  /** Must be a javascipt arr for React-table */
  fields: PropTypes.array.isRequired,
  updateSubEntity: PropTypes.func
};

export default SidePanelTable;
