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
    constructor(props) {
      super(props);
      this.state = {
        pageSize: 5,
        pageSizeOptions: [5, 10, 20, 25, 50, 100],
        filtered: props.filtered,
      };
    }

    /*
    * TODO this is going to be commented because of the Exceptions table in SidePanelDetails for Business Hours 
    * when we add one exception the table add 1 row and does not respect the pageSize default value.
    */

   /* componentDidMount() {
      const numOfRows = parseFloat((this.refs.inner.clientHeight / 50 - 2).toFixed(0));
      /**
       * Make sure to allways show at lease 3 rows for a better ux on smaller resolutions
       */
     /* const defaultPageSizeOptions = this.state.pageSizeOptions;
      const pageSize = numOfRows < 4 ? 3 : numOfRows;
      const constructedPageSizeOptions = defaultPageSizeOptions.filter(x => x > pageSize);

      this.setState({
        pageSize,
        pageSizeOptions: [pageSize, ...constructedPageSizeOptions],
      });
    }*/

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

DynamicTableWrapper.propTypes = {
  children: PropTypes.any,
  filtered: PropTypes.array,
};
