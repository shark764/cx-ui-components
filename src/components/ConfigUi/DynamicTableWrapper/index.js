/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

/**
 *
 * DynamicTableWrapper
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function DynamicTableWrapper(WrappedComponent) {
  return class extends Component {
    static propTypes = {
      children: PropTypes.any,
      filtered: PropTypes.array,
      tableType: PropTypes.string,
    };
    constructor(props) {
      super(props);
      this.state = {
        pageSize: 5,
        pageSizeOptions: [5, 10, 20, 25, 50, 100],
        filtered: props.filtered,
      };
    }

    componentDidMount() {
      // We just want to adapt pagination fields in case
      // of a sidePanel table, modal tables need to display
      // as more rows as possible.
      if (this.props.tableType !== 'sidePanel') {
        const numOfRows = parseFloat((this.refs.inner.clientHeight / 50 - 2).toFixed(0));
        /**
         * Make sure to allways show at lease 3 rows for a better ux on smaller resolutions
         */
        const defaultPageSizeOptions = this.state.pageSizeOptions;
        const pageSize = numOfRows < 4 ? 3 : numOfRows;
        const constructedPageSizeOptions = defaultPageSizeOptions.filter(x => x > pageSize);

        this.setState({
          pageSize,
          pageSizeOptions: [pageSize, ...constructedPageSizeOptions],
        });
      }
    }

    setPageSize = pageSize => this.setState({ pageSize });

    onFilteredChange = filtered => this.setState({ filtered });

    render() {
      return (
        <div style={{ overflow: 'auto', marginBottom: '10px', flexGrow: 1 }} ref="inner">
          <WrappedComponent
            pageSizeOptions={this.state.pageSizeOptions}
            setPageSize={this.setPageSize}
            {...this.props}
            pageSize={this.state.pageSize}
            filtered={this.state.filtered}
            onFilteredChange={this.onFilteredChange}
          />
        </div>
      );
    }
  };
}
