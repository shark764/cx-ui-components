import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function DynamicTableWrapper(WrappedComponent) {

  return class extends Component {

    constructor(props) {
      super(props);
      this.setPageSize = this.setPageSize.bind(this);
      this.state = {
        pageSize: 5,
        pageSizeOptions: [5, 10, 20, 25, 50, 100]
      };
    }
  
    componentDidMount() {
      const numOfRows = parseFloat((this.refs.inner.clientHeight / 50 - 2).toFixed(0));
      /**
       * Make sure to allways show at lease 3 rows for a better ux on smaller resolutions
       */
      const defaultPageSizeOptions = this.state.pageSizeOptions;
      const pageSize = numOfRows < 4? 3 : numOfRows;
      const constructedPageSizeOptions = defaultPageSizeOptions.filter(x => x > pageSize);
      this.setState({
        pageSize: pageSize,
        pageSizeOptions: [pageSize, ...constructedPageSizeOptions]
      });
    }

    setPageSize(pageSize) {
      this.setState({
        pageSize: pageSize,
      });
    }

    render() {
      return (
        <div 
          style={{overflow: 'auto', marginBottom: '10px', flexGrow: 1}} 
          ref="inner"
        >
          <WrappedComponent pageSizeOptions={this.state.pageSizeOptions} setPageSize={this.setPageSize} {...this.props} pageSize={this.state.pageSize} />
        </div>
      )
    }
  } 

} 

DynamicTableWrapper.propTypes = {
    children: PropTypes.any,
};
