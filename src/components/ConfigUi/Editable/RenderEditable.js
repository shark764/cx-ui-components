/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

/**
 *
 * RenderEditable
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
//
const ContentEditable = styled.div`
  background-color: white;
  height: 100%;
`;

class RenderEditable extends Component {
  shouldComponentUpdate = nextProps => {
    const element = ReactDOM.findDOMNode(this);
    return nextProps.html !== element.innerHTML;
  };

  componentDidUpdate = () => {
    const element = ReactDOM.findDOMNode(this);
    if (this.props.html !== element.innerHTML) {
      element.innerHTML = this.props.html;
    }
  };

  onBlur = e => {
    this.emitChange(e);
    this.props.onBlur(e);
  };

  emitChange = () => {
    const element = ReactDOM.findDOMNode(this);
    var html = element.innerHTML;
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange({
        target: {
          value: html
        }
      });
    }
    this.lastHtml = html;
  };

  render = () => {
    return (
      <ContentEditable
        className="react-table-cell-content-editable"
        contentEditable
        suppressContentEditableWarning
        onInput={this.emitChange}
        onBlur={this.onBlur}
        onChange={this.props.onChange}
        dangerouslySetInnerHTML={{ __html: this.props.html }}
      />
    );
  };
}

RenderEditable.propTypes = {
  html: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func
};

export default RenderEditable;
