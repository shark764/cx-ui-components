import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function DynamicTableWrapper(WrappedComponent) {

  return class extends Component {

    constructor(props) {
      super(props);
      this.setPageSize = this.setPageSize.bind(this);
      this.state = {
        pageSize: 5
      };
    }
  
    componentDidMount() {
      const nr = parseFloat((this.refs.inner.clientHeight / 50 - 3 ).toFixed(0));
      /**
       * Make sure to allways show at lease 3 rows for a better ux on smaller resolutions
       */
      this.setState({pageSize: nr < 4? 3 : nr});
    }

    setPageSize(pageSize) {
      this.setState({
        pageSize: pageSize
      });
    }

    render() {
      return (
        <div 
          style={{overflow: 'auto', marginBottom: '10px', flexGrow: 1}} 
          ref="inner"
        >
          <WrappedComponent setPageSize={this.setPageSize} {...this.props} pageSize={this.state.pageSize} />
        </div>
      )
    }
  } 

} 

DynamicTableWrapper.propTypes = {
    children: PropTypes.any,
};
