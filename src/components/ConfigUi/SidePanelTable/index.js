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
import "react-table/react-table.css";

// React-Table does not integrate well with Styled components
// We will be writing table style overrides here
// We will use a new class name to make these styles component specific
injectGlobal`
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
`

function SidePanelTable(props) {
  return (
    <ReactTable
      data={props.data}
      columns={props.columns}
      defaultPageSize={5}
      className='SidePanelTable'
    />
  );
}

SidePanelTable.propTypes = {
  id: PropTypes.string,
  data: PropTypes.array,
  columns: PropTypes.array,
};

export default SidePanelTable;
