/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

/**
 *
 * EntityTable
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { injectGlobal } from 'styled-components';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

import Button from '../Button';
import PageHeader from '../PageHeader';
import LoadingSpinner from '../../SVGs/LoadingSpinnerSVG';

import { importantCss } from '../../../utils';
import { filterDefaultMethod } from '../../../utils/filterMethod';

import Checkbox from '../Checkbox';
import CustomDropdownMenu from '../CustomDropdownMenu';

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

    .EntityTable .rt-tbody .row-selected-active .rt-td,
    &.row-selected-active {
      color: #000;
      background-color: #d7e9f5;
    }
    
    .EntityTable .rt-tbody .row-selected-active .rt-td,
    &.row-selected-active.-odd {
      color: #000 !important;
      background-color: #d7e9f5 !important;
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
  `};
`;

const CheckboxWrapper = styled.div`
  width: 100%;
  height: 100%;
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

const WrappedButton = styled(Button)`
  margin-right: 10px;
`;

const ActionsMenu = styled(CustomDropdownMenu)`
  font-size: 14px;
  padding: 7px 15px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  color: #07487a;
  background-color: white;
`;

const ActionButton = styled(Button)`
  margin: 5px auto;
`;

class EntityTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  getData = visibleOrAll => {
    const pageIndex = this.selectTable.getResolvedState().page;
    const pageSize = this.selectTable.getResolvedState().pageSize;
    const startIndex = pageIndex > 0 ? pageSize * pageIndex : pageIndex;
    const endIndex = startIndex + pageSize;
    if (visibleOrAll === 'visible') {
      return this.selectTable
        .getResolvedState()
        .sortedData.filter((x, index) => index >= startIndex && index < endIndex);
    } else {
      return this.selectTable.props.data;
    }
  };

  selectToggle = (data, bool, visibleOrAll) => {
    this.props.setVisibleMenu('none', this.props.entityMetadata.entityName);
    data.forEach(x =>
      this.props.onBulkClick(
        this.props.entityMetadata.entityName,
        visibleOrAll === 'visible' ? x._original.id : x.id,
        bool
      )
    );
  };

  selectAllVisible = () => {
    this.selectToggle(this.getData('visible'), true, 'visible');
  };
  unselectAllVisible = () => {
    this.selectToggle(this.getData('visible'), false, 'visible');
  };
  selectAll = () => {
    this.selectToggle(this.getData('all'), true, 'all');
  };
  unselectAll = () => {
    this.selectToggle(this.getData('all'), false, 'all');
  };

  render() {
    const bulkColumn = {
      id: 'bulkId',
      accessor: 'bulkChangeItem',
      filterMethod: ({ value, id }, rows) => {
        if (value === 'on') {
          return rows[id] === true;
        } else if (value === 'off') {
          return rows[id] === undefined;
        } else {
          return true;
        }
      },
      Filter: ({ onChange }) => (
        <Checkbox1 className="bulk-action-filter-toggle" onChange={onChange} indeterminate="true" />
      ),
      sortable: false,
      resizable: false,
      width: 40,
      Cell: ({ row }) => (
        <CheckboxWrapper
          className="bulk-action-selector-toggle"
          onClick={e =>
            this.props.onBulkClick(this.props.entityMetadata.entityName, row._original.id) && e.stopPropagation()
          }
        >
          <Checkbox2
            type="checkbox"
            checked={row._original.bulkChangeItem || false}
            readOnly
            title="Add or remove this from the bulk actions form"
          />
        </CheckboxWrapper>
      )
    };
    return (
      <GridContainer id={this.props.id} className={this.props.className}>
        <Header text={this.props.pageTitle} helpLink={this.props.pageHelpLink}>
          {this.props.userHasCreatePermission && (
            <WrappedButton buttonType="primary" id="sdpanel-create" onClick={this.props.onCreateButtonClick}>
              Create
            </WrappedButton>
          )}
          {this.props.userHasUpdatePermission &&
            this.props.showBulkActionsMenu && (
              <ActionsMenu
                currentFilter="Actions"
                setVisibleMenu={this.props.setVisibleMenu}
                currentVisibleSubMenu={this.props.currentVisibleSubMenu}
                menuType="actionsMenu"
                buttonType="columnFilter"
                tableType={this.props.entityMetadata && this.props.entityMetadata.entityName}
                id="actions-button"
              >
                <ActionButton
                  buttonType="columnFilter"
                  id="table-items-actions-select-all-visible"
                  onClick={this.selectAllVisible}
                >
                  Select All Visible
                </ActionButton>
                <ActionButton
                  buttonType="columnFilter"
                  id="table-items-actions-unselect-all-visible"
                  onClick={this.unselectAllVisible}
                >
                  Unselect All Visible
                </ActionButton>
                <ActionButton buttonType="columnFilter" id="table-items-actions-select-all" onClick={this.selectAll}>
                  Select All
                </ActionButton>
                <ActionButton
                  buttonType="columnFilter"
                  id="table-items-actions-unselect-all"
                  onClick={this.unselectAll}
                >
                  Unselect All
                </ActionButton>
              </ActionsMenu>
            )}
          {this.props.children}
        </Header>

        <Table
          innerRef={r => (this.selectTable = r)}
          data={this.props.items}
          noDataText={this.props.fetching ? <LoadingSpinner size={60} /> : 'No results found'}
          columns={
            this.props.entityMetadata &&
            this.props.entityMetadata.entityName &&
            (this.props.showBulkActionsMenu && this.props.userHasUpdatePermission)
              ? [bulkColumn, ...this.props.columns]
              : [...this.props.columns]
          }
          pageSizeOptions={[5, 10, 20, 25, 50, 100].filter(pSize => pSize < (this.props.items || []).length + 5)}
          defaultPageSize={20}
          className="-striped EntityTable"
          filterable
          defaultFilterMethod={(filter, row) => filterDefaultMethod(filter, row)}
          defaultFiltered={this.props.filtered}
          defaultSorted={this.props.sorted}
          getTrProps={(state, rowInfo) => {
            if (rowInfo && rowInfo.row) {
              return {
                onClick: () => {
                  this.props.onRowClick(rowInfo.original.id);
                  this.setState({
                    selected: rowInfo.index
                  });
                },
                className: `row-selected-${rowInfo.index === this.state.selected ? 'active' : 'not-active'}`
              };
            } else {
              return {};
            }
          }}
        />
      </GridContainer>
    );
  }
}

EntityTable.propTypes = {
  filtered: PropTypes.array,
  showBulkActionsMenu: PropTypes.bool,
  sorted: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.element,
  fetching: PropTypes.bool,
  currentVisibleSubMenu: PropTypes.string,
  id: PropTypes.string,
  pageTitle: PropTypes.string,
  onBulkClick: PropTypes.func,
  entityMetadata: PropTypes.object,
  pageHelpLink: PropTypes.string,
  setVisibleMenu: PropTypes.func,
  onSearchFilterChange: PropTypes.func,
  onCreateButtonClick: PropTypes.func,
  /** Must be a javascipt arr for React-table */
  items: PropTypes.array,
  /** Must be a javascipt arr for React-table */
  columns: PropTypes.array,
  onRowClick: PropTypes.func,
  userHasCreatePermission: PropTypes.bool,
  userHasUpdatePermission: PropTypes.bool
};

export default EntityTable;
