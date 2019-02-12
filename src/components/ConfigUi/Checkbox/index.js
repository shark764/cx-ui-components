import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      status: 'indeterminate'
    };
  }

  componentDidMount() {
    this.el.indeterminate = this.props.indeterminate;
  }

  componentDidUpdate(prevProps) {
    if (this.state.statue === 'indeterminate') {
      this.el.indeterminate = this.props.indeterminate;
    }
  }

  toggleState = () => {
    if(this.state.status === 'indeterminate') {
      this.setState({status: 'on'});
      return this.props.onChange('on');
    } else if(this.state.status === 'on') {
      this.setState({status: 'off'});
      return this.props.onChange('off');
    } else if(this.state.status === 'off') {
      this.setState({status: 'indeterminate'});
      this.el.indeterminate = this.props.indeterminate;
      return this.props.onChange('indeterminate');
    }
  }

  render() {
    return (
      <input className="read-only" {...this.props} type="checkbox" ref={el => this.el = el} onChange={this.toggleState} checked={this.state.status === 'on'}  />
    );
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  indeterminate: PropTypes.string,
};
