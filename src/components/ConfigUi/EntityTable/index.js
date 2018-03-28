/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * EntityTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import Button from '../Button';
import PageHeader from '../PageHeader';
import SearchBox from '../SearchBox';
import LoadingSpinner from '../../SVGs/LoadingSpinnerSVG';

import { importantCss } from '../../../utils';

// React-Table does not integrate well with Styled components
// We will be writing table style overrides here
// We will use a new class name to make these styles component specific
injectGlobal`${importantCss(`
  .ReactTable {
    overflow-y: auto;

    .rt-resizer {
      right: 0;
    }
  }

  .EntityTable .rt-thead .rt-th {
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

    .rt-resizable-header {
      min-width: 60px;
    }
  }

  .EntityTable abbr {
    text-decoration: none;
  }

  .EntityTable .rt-tbody .rt-tr-group {
    border: none;
    height: 40px;
    max-height: 40px;

    &:hover {
      background-color: #e6f5ff;
    }
  }

  .EntityTable .rt-tbody .rt-td {
    padding: 10px;
    font-size: 14px;
    text-align: left;
    border: none;
    color: #483737;
    min-width: 100px;
  }
`)}`;

const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'table  table';
  padding: 20px;
`;

const Header = styled(PageHeader)`
  grid-area: header;
`;



const Table = styled(ReactTable)`
  grid-area: table;
  height: 88vh;
`;

function EntityTable(props) {
  return (

      <GridContainer id={props.id} className={props.className}>
        <Header text={props.pageTitle} helpLink={props.pageHelpLink}>
          {props.userHasCreatePermission &&
          <Button
            buttonType="primary"
            onClick={props.onCreateButtonClick}
          >
            Create
          </Button>}
        </Header>

        <Table
          data={props.items}
          noDataText={props.items? "No results found" : <LoadingSpinner size={60}/>}
          columns={props.columns}
          defaultPageSize={20}
          className="-striped EntityTable"
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id])
              .toLowerCase()
              .indexOf(filter.value.toLowerCase()) > -1
          }
          getTrProps={(state, rowInfo) => {
            return {
              onClick: () => {
                props.onRowClick(rowInfo.original.id);
              },
            };
          }}
        />
      </GridContainer>
  );
}

EntityTable.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  pageTitle: PropTypes.string,
  pageHelpLink: PropTypes.string,
  onSearchFilterChange: PropTypes.func,
  onCreateButtonClick: PropTypes.func,
  /** Must be a javascipt arr for React-table */
  items: PropTypes.array,
  /** Must be a javascipt arr for React-table */
  columns: PropTypes.array,
  onRowClick: PropTypes.func,
};

export default EntityTable;
