import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TablePagination = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px;
  font-size: 11.5pt;
`;
const PaginationList = styled.div`
  -ms-flex: inherit;
  flex: inherit;
  font-size: 11.5pt;
`;
const PaginationButton = styled.button`
  font-size: 11.5pt;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:not([disabled]):hover {
    text-decoration: underline;
    color: darken(${props => props.theme.primaryColor}, 30%);
  }

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: gray;
    `};
  &.Table__pageButton--active {
    color: ${props => props.theme.primaryColor};
    font-weight: bold;
    &:hover {
      color: darken(${props => props.theme.primaryColor}, 30%);
    }
  }
`;

const defaultButton = props => <PaginationButton {...props}>{props.children}</PaginationButton>;
defaultButton.propTypes = {
  children: PropTypes.any,
};

export default class Pagination extends Component {
  constructor(props) {
    super();

    this.getSafePage = this.getSafePage.bind(this);
    this.changePage = this.changePage.bind(this);
    this.applyPage = this.applyPage.bind(this);

    this.state = {
      page: props.page,
      visiblePages: this.getVisiblePages(null, props.pages),
    };
  }

  static propTypes = {
    pages: PropTypes.number,
    page: PropTypes.number,
    PageButtonComponent: PropTypes.any,
    onPageChange: PropTypes.func,
    previousText: PropTypes.string,
    nextText: PropTypes.string,
    children: PropTypes.any,
    canNextFromData: PropTypes.bool,
    showPageSizeOptions: PropTypes.bool,
    pageSizeOptions: PropTypes.array,
    pageSize: PropTypes.number,
    showPageJump: PropTypes.bool,
    onPageSizeChange: PropTypes.func,
    className: PropTypes.string,
    showTotalPages: PropTypes.bool,
    style: PropTypes.any,
    pageText: PropTypes.string,
    ofText: PropTypes.string,
    rowsText: PropTypes.string,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.pages !== nextProps.pages) {
      this.setState({
        visiblePages: this.getVisiblePages(null, nextProps.pages),
      });
    }

    this.changePage(nextProps.page + 1);
  }

  filterPages = (visiblePages, totalPages) => {
    return visiblePages.filter(page => page <= totalPages);
  };

  getVisiblePages = (page, total) => {
    if (total < 7) {
      return this.filterPages([1, 2, 3, 4, 5, 6], total);
    } else {
      if (page % 5 >= 0 && page > 4 && page + 2 < total) {
        return [1, page - 1, page, page + 1, total];
      } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
        return [1, total - 3, total - 2, total - 1, total];
      } else {
        return [1, 2, 3, 4, 5, total];
      }
    }
  };

  getSafePage(page) {
    if (isNaN(page)) {
      page = this.props.page;
    }
    if (this.props.canNextFromData) return page;

    return Math.min(Math.max(page, 0), this.props.pages - 1);
  }

  changePage(page) {
    const activePage = this.props.page + 1;

    if (page === activePage) {
      return;
    }

    const visiblePages = this.getVisiblePages(page, this.props.pages);

    this.setState({
      visiblePages: this.filterPages(visiblePages, this.props.pages),
    });

    this.props.onPageChange(page - 1);
  }

  applyPage(e) {
    if (e) {
      e.preventDefault();
    }
    const page = this.state.page;
    this.changePage(page === '' ? this.props.page : page);
  }

  render() {
    const {
      // Computed
      pages,
      // Props
      page,
      showPageSizeOptions,
      pageSizeOptions,
      pageSize,
      showPageJump,
      onPageSizeChange,
      className,
      PageButtonComponent = defaultButton,
      showTotalPages = true,
    } = this.props;
    const { visiblePages } = this.state;
    const activePage = this.props.page + 1;

    return (
      <div className={classnames(className, '-pagination')} style={this.props.style}>
        <TablePagination className="Table__pagination">
          <div className="Table__prevPageWrapper">
            <PageButtonComponent
              className="Table__pageButton"
              onClick={() => {
                if (activePage === 1) return;
                this.changePage(activePage - 1);
              }}
              disabled={activePage === 1}
            >
              {this.props.previousText}
            </PageButtonComponent>
          </div>
          <div className="Table__visiblePagesWrapper">
            {visiblePages.map((page, index, array) => {
              return (
                <PageButtonComponent
                  key={page}
                  className={activePage === page ? 'Table__pageButton Table__pageButton--active' : 'Table__pageButton'}
                  onClick={this.changePage.bind(null, page)}
                >
                  {array[index - 1] + 2 < page ? `...${page}` : page}
                </PageButtonComponent>
              );
            })}
          </div>
          <div className="Table__nextPageWrapper">
            <PageButtonComponent
              className="Table__pageButton"
              onClick={() => {
                if (activePage === this.props.pages) return;
                this.changePage(activePage + 1);
              }}
              disabled={activePage === this.props.pages}
            >
              {this.props.nextText}
            </PageButtonComponent>
          </div>
        </TablePagination>

        <PaginationList className="-center">
          <span className="-pageInfo">
            {this.props.pageText}
            {showPageJump ? (
              <div className="-pageJump">
                <input
                  type={this.state.page === '' ? 'text' : 'number'}
                  onChange={e => {
                    const val = e.target.value;
                    const page = val - 1;
                    if (val === '') {
                      return this.setState({ page: val });
                    }
                    this.setState({ page: this.getSafePage(page) });
                  }}
                  value={this.state.page === '' ? '' : this.state.page + 1}
                  onBlur={this.applyPage}
                  onKeyPress={e => {
                    if (e.which === 13 || e.keyCode === 13) {
                      this.applyPage();
                    }
                  }}
                />
              </div>
            ) : (
              <span className="-currentPage">{page + 1}</span>
            )}
            {showTotalPages ? (
              <React.Fragment>
                {this.props.ofText} <span className="-totalPages">{pages || 1}</span>
              </React.Fragment>
            ) : null}
          </span>
          {showPageSizeOptions && (
            <span className="select-wrap -pageSizeOptions">
              {`Show per page `}
              <select onChange={e => onPageSizeChange(Number(e.target.value))} value={pageSize}>
                {pageSizeOptions.map((option, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option key={i} value={option}>
                    {option} {this.props.rowsText}
                  </option>
                ))}
              </select>
            </span>
          )}
        </PaginationList>
      </div>
    );
  }
}
