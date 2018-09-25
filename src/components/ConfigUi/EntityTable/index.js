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
import LoadingSpinner from '../../SVGs/LoadingSpinnerSVG';

import { importantCss } from '../../../utils';

import Checkbox from '../Checkbox';

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

  .ReactTable .rt-thead .rt-th {
    overflow: visible;
  }

  .EntityTable .rt-thead .rt-th {
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

    .rt-resizable-header {
      min-width: 60px;
    }
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
  height: 80vh;

  ${props => injectGlobal`
    .EntityTable .rt-tbody .rt-tr-group {
      :hover {
        background-color: ${props.theme.accentHoverColor} !important;
      }
    }

    .EntityTable,
    .SidePanelTable {
      .pagination-bottom button {
        background-color: ${props.theme.accentHoverColor} !important;
        max-height: 30px;
        margin-top: 3px;
        :hover {
          color: #483737 !important
        }
      }
      .pagination-bottom .-center {
        flex-wrap: nowrap;
      }
    }
  `}
`;

const CheckboxWrapper = styled.div`
width: 100%;
height: 100%
`;

const Checkbox1 = styled(Checkbox)`
width: 15px;
height: 15px;
margin: 5px;
`;

const Checkbox2 = styled.input`
width: 15px;
height: 15px;
margin-top: 2px;
`;

function EntityTable(props) {
  const bulkColumn = {
    id: 'bulkId',
    accessor: 'bulkChangeItem',
    filterMethod: ({value, id}, rows) => {
      if (value === 'on') {
        return rows[id] === true;
      } else if (value === 'off') {
        return rows[id] === undefined;
      } else {
        return true;
      }
    },
    Filter: ({ onChange }) => (<Checkbox1 className="bulk-action-filter-toggle" onChange={ onChange } indeterminate="true" />),
    sortable : false,
    resizable: false,
    width: 40,
    Cell: ({ row }) => (<CheckboxWrapper className="bulk-action-selector-toggle" onClick={ e => props.onBulkClick(props.entityMetadata.entityName, row._original.id) && e.stopPropagation()}><Checkbox2 type="checkbox" checked={row._original.bulkChangeItem || false} readOnly title="Add or remove this from the bulk actions form"/></CheckboxWrapper>)
  };
  return (
    <GridContainer id={props.id} className={props.className}>
      <Header text={props.pageTitle} helpLink={props.pageHelpLink}>
        {props.userHasCreatePermission && (
          <Button buttonType="primary" id="sdpanel-create" onClick={props.onCreateButtonClick}>
            Create
          </Button>
        )}
      </Header>

      <Table
        data={props.items}
        noDataText={props.items ? 'No results found' : <LoadingSpinner size={60} />}
        columns={ props.entityMetadata &&
          props.entityMetadata.entityName && 
          props.entityMetadata.bulkEditsAvailable()? [bulkColumn, ...props.columns] : [...props.columns]}
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
        }
        
      }
      />
    </GridContainer>
  );
}

EntityTable.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  pageTitle: PropTypes.string,
  onBulkClick: PropTypes.func,
  entityMetadata: PropTypes.object,
  pageHelpLink: PropTypes.string,
  onSearchFilterChange: PropTypes.func,
  onCreateButtonClick: PropTypes.func,
  /** Must be a javascipt arr for React-table */
  items: PropTypes.array,
  /** Must be a javascipt arr for React-table */
  columns: PropTypes.array,
  onRowClick: PropTypes.func,
  userHasCreatePermission: PropTypes.bool,
};

export default EntityTable;
