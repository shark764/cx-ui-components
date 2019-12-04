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
import LoadingSpinner from '../../Icons/LoadingSpinnerSVG';

import { importantCss } from '../../../utils';
import { filterDefaultMethod } from '../../../utils/filterMethod';

import Checkbox from '../Checkbox';
import CustomDropdownMenu from '../CustomDropdownMenu';

import Pagination from './Pagination';
import { withRouter } from 'react-router-dom';
import Confirmation from '../Confirmation';

// React-Table does not integrate well with Styled components
// We will be writing table style overrides here
// We will use a new class name to make these styles component specific
injectGlobal`${importantCss(`
  .ReactTable {
    overflow-y: auto;

    .rt-resizer {
      z-index: 0;
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

  .ReactTable .-pagination .-center {
    -ms-flex: inherit;
    flex: inherit;
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
  height: 90vh;
  ${props => injectGlobal`
    .EntityTable .rt-tbody .rt-tr-group {
      :hover {
        background-color: ${props.theme.accentHoverColor} !important;
      }
    }

    .EntityTable,
    .SidePanelTable {
      .pagination-bottom button {
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

const HeaderCheckbox = styled(Checkbox)`
  width: 15px;
  height: 15px;
  margin: 5px;
`;

const RowCheckbox = styled.input`
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
      pageSizeOptions: [5, 10, 20, 25, 50, 100],
      defaultPageSize: 20,
      pageSize: 20,
      selected: '',
      showWarning: false,
      allChecked: false,
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
    for (let i = 0, len = data.length; i < len; i++) {
      let x = data[i];

      if (!x._original.inherited) {
        this.props.onBulkClick(
          this.props.entityMetadata.entityName,
          visibleOrAll === 'visible' ? x._original.id : x.id,
          bool
        );
      }
    }
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
  toggleHeader = value => {
    if (value === 'on') {
      this.selectAllVisible();
    } else if (value === 'off') {
      this.unselectAllVisible();
    }
    this.setState({ allChecked: value === 'on' });
  };

  highlightRow = ({
    index,
    row: {
      _original: { bulkChangeItem, id },
    },
  }) => {
    if (id === this.props.selectedEntityId) {
      return 'rgba(253, 255, 50, 0.17)';
    } else if (bulkChangeItem) {
      // New color to make bulk selected rows
      // more visible.
      return 'rgba(232,232,232, 1)';
    }
    return null;
  };

  updateURL = queryString => {
    if (this.props.insideIframe) {
      this.props.updateConfigUIUrlWithQueryString(queryString);
    } else {
      this.props.history.push({
        ...this.props.location,
        search: queryString,
      });
    }
  };

  getTableRowProps = (state, rowInfo) => {
    if (rowInfo && rowInfo.row) {
      return {
        onClick: e => {
          if (this.props.dirty && rowInfo.original.id !== this.props.selectedEntityId) {
            this.setState({ selected: rowInfo.original.id });
            this.showWarning(e, true);
          } else {
            this.onRowClick(rowInfo.original.id);
          }
        },
        className: `row-selected-${rowInfo.original.id === this.props.selectedEntityId ? 'active' : 'not-active'}`,
        style: {
          background: this.highlightRow(rowInfo),
        },
      };
    } else {
      return { style: {} };
    }
  };
  getTdProps = () => ({ style: { fontSize: '11.5pt' } });
  getTheadProps = () => ({ style: { color: 'grey' } });

  showWarning = (e, show = true) => {
    e.stopPropagation();
    this.setState({ showWarning: show });
  };

  onRowClick = rowId => {
    this.updateURL(rowId);
    this.props.onRowClick(rowId);
  };

  componentDidUpdate(prevProps, nextProps) {
    /**
     * If we go from having selected items
     * to no selected items , close the side panel
     */
    if (prevProps.selectedEntityId !== this.props.selectedEntityId && this.props.selectedEntityId === '') {
      this.setState({ allChecked: false });
    }
  }

  render() {
    const bulkColumn = {
      id: 'bulkId',
      // Changing filter behavior for header toggle to
      // Select/Unselect All Visible functionality.
      // See CXV1-19967 for more details.
      Header: (
        <HeaderCheckbox
          className="bulk-action-select-all-toggle"
          onChange={this.toggleHeader}
          data-automation="bulkSelectAllCheckbox"
          checked={this.state.allChecked}
        />
      ),
      accessor: 'bulkChangeItem',
      sortable: false,
      resizable: false,
      filterable: false,
      width: 40,
      Cell: ({ row }) =>
        /**
         * TODO:
         * Inherited entities shouldn't be included when
         * performing bulk actions.
         * And checkbox should be disabled or not visible
         * to user.
         */
        row._original.inherited ? (
          <div style={{ textAlign: 'center' }} title={`Not available`}>
            <span>-</span>
          </div>
        ) : (
          <CheckboxWrapper
            className="bulk-action-selector-toggle"
            onClick={e =>
              this.props.onBulkClick(this.props.entityMetadata.entityName, row._original.id) && e.stopPropagation()
            }
          >
            <RowCheckbox
              type="checkbox"
              checked={row._original.bulkChangeItem || false}
              title="Add or remove this from the bulk actions form"
              data-automation={`${row._original.id}Checkbox`}
            />
          </CheckboxWrapper>
        ),
    };

    return (
      <GridContainer id={this.props.id} className={this.props.className}>
        <Header text={this.props.pageTitle} helpLink={this.props.pageHelpLink}>
          {this.props.userHasCreatePermission && (
            <WrappedButton
              buttonType="primary"
              id="sdpanel-create"
              data-automation="entityCreateButton"
              onClick={() => {
                this.props.onCreateButtonClick();
                this.updateURL('');
              }}
            >
              Create
            </WrappedButton>
          )}
          {this.props.userHasUpdatePermission && this.props.showBulkActionsMenu && (
            <ActionsMenu
              currentFilter="Actions"
              setVisibleMenu={this.props.setVisibleMenu}
              currentVisibleSubMenu={this.props.currentVisibleSubMenu}
              menuType="actionsMenu"
              buttonType="columnFilter"
              data-automation="actionsButton"
              tableType={this.props.entityMetadata && this.props.entityMetadata.entityName}
              className="actions-button"
            >
              <ActionButton
                buttonType="columnFilter"
                id="table-items-actions-select-all-visible"
                data-automation="selectAllVisibleButton"
                onClick={() => {
                  this.selectAllVisible();
                  this.updateURL('');
                }}
              >
                Select All Visible
              </ActionButton>
              <ActionButton
                buttonType="columnFilter"
                id="table-items-actions-unselect-all-visible"
                data-automation="unselectAllVisibleButton"
                onClick={this.unselectAllVisible}
              >
                Unselect All Visible
              </ActionButton>
              <ActionButton
                buttonType="columnFilter"
                id="table-items-actions-select-all"
                data-automation="selectAllButton"
                onClick={() => {
                  this.selectAll();
                  this.updateURL('');
                }}
              >
                Select All
              </ActionButton>
              <ActionButton
                buttonType="columnFilter"
                id="table-items-actions-unselect-all"
                data-automation="unselectAllButton"
                onClick={this.unselectAll}
              >
                Unselect All
              </ActionButton>
            </ActionsMenu>
          )}
          {this.props.children}
        </Header>

        <Table
          PaginationComponent={Pagination}
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
          pageSizeOptions={this.state.pageSizeOptions}
          pageSize={this.state.pageSize}
          onPageSizeChange={pageSize => this.setState({ pageSize })}
          defaultPageSize={this.state.defaultPageSize}
          className="-striped EntityTable"
          filterable
          defaultFilterMethod={(filter, row) => filterDefaultMethod(filter, row)}
          defaultFiltered={this.props.filtered}
          defaultSorted={this.props.sorted}
          getTdProps={this.getTdProps}
          getTheadProps={this.getTheadProps}
          getTrProps={this.getTableRowProps}
          minRows={0}
          emptyRowsWhenPaging={false}
        />

        {this.state.showWarning && (
          <Confirmation
            mainText="You have unsaved changes that will be lost!."
            secondaryText="Click Confirm to discard changes, or Cancel to continue editing."
            confirmBtnCallback={e => {
              console.log('this.state.selected', this.state.selected);
              this.onRowClick(this.state.selected);
              this.showWarning(e, false);
            }}
            cancelBtnCallback={e => this.showWarning(e, false)}
            onMaskClick={e => this.showWarning(e, false)}
          />
        )}
      </GridContainer>
    );
  }
}

EntityTable.propTypes = {
  filtered: PropTypes.array,
  showBulkActionsMenu: PropTypes.bool,
  sorted: PropTypes.array,
  className: PropTypes.string,
  tableRowSelect: PropTypes.string,
  children: PropTypes.element,
  fetching: PropTypes.bool,
  currentVisibleSubMenu: PropTypes.string,
  id: PropTypes.string,
  'data-automation': PropTypes.string,
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
  userHasUpdatePermission: PropTypes.bool,
  history: PropTypes.any,
  location: PropTypes.any,
  insideIframe: PropTypes.bool,
  selectedEntityId: PropTypes.string,
  pristine: PropTypes.bool,
  dirty: PropTypes.bool,
};

export default withRouter(EntityTable);
