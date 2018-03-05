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

import { importantCss } from '../../../utils';

// React-Table does not integrate well with Styled components
// We will be writing table style overrides here
// We will use a new class name to make these styles component specific
injectGlobal`${importantCss(`
  .ReactTable {
    overflow-y: auto;
  }

  .EntityTable .rt-thead .rt-th {
    color: #656565;
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    border: none;
  }

  .EntityTable .rt-tbody .rt-tr-group {
    border: none;

    &:hover {
      background-color: #e6f5ff;
    }
  }

  .EntityTable .rt-tbody .rt-td {
    padding: 10px;
    font-size: 14px;
    text-align: left;
    border: none;
  }
`)}`

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 50px 1fr;
  grid-template-areas:
    " header  actions1 "
    " search  actions2 "
    " table     table  ";
  padding: 20px;
`

const Header = styled(PageHeader)`
  grid-area: header;
`

const TableSearchBox = styled(SearchBox)`
  grid-area: search;
`

const ActionButtons1 = styled.div`
  grid-area: actions1;
  text-align: right;
`

const ActionButtons2 = styled.div`
  grid-area: actions2;
  text-align: right;
`

const Table = styled(ReactTable)`
  grid-area: table;
`

function EntityTable(props) {
  return (
    <Wrapper id={props.id} className={props.className}>
      <Header
        text={props.pageTitle}
        helpLink={props.pageHelpLink}
      />
      <TableSearchBox
        placeholder='Search'
        onChange={props.onSearchFilterChange}
      />
      <ActionButtons1>
        <Button
          type='primary'
          onClick={props.onCreateBtnClick}
        >
          Create
        </Button>
      </ActionButtons1>
      <ActionButtons2>

      </ActionButtons2>

      <Table
        data={props.items}
        columns={props.columns}
        defaultPageSize={20}
        className='EntityTable'
        getTrProps={(state, rowInfo) => {
          return {
            onClick: () => {
              props.onRowClick(rowInfo.original.id);
            }
          }
        }}
      />
    </Wrapper>
  );
}

EntityTable.propTypes = {
  id: PropTypes.string,
  pageTitle: PropTypes.string,
  pageHelpLink: PropTypes.string,
  onSearchFilterChange: PropTypes.func,
  onCreateBtnClick: PropTypes.func,
  /** Must be a javascipt arr for React-table */
  items: PropTypes.array,
  /** Must be a javascipt arr for React-table */
  columns: PropTypes.array,
  onRowClick: PropTypes.func,
};

export default EntityTable;
