import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Confirmation from '../';

const Wrapper = styled.div`
  display: inline-block;
`;

export default class ConfirmationWrapper extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  toggle = e => {
    this.setState({ open: !this.state.open });
    e.preventDefault();
  };
  render() {
    return (
      <Wrapper onClick={this.props.confirmBtnCallback ? this.toggle : undefined} className={this.props.className}>
        {this.state.open && (
          <Confirmation
            confirmBtnCallback={this.props.confirmBtnCallback}
            cancelBtnCallback={this.toggle}
            mainText={this.props.mainText}
            secondaryText={this.props.secondaryText}
            onMaskClick={this.toggle}
            cancelBtnText={this.props.cancelBtnText}
            confirmBtnText={this.props.confirmBtnText}
            openPopupBox={this.props.openPopupBox}
          />
        )}
        {this.props.children}
      </Wrapper>
    );
  }
}

ConfirmationWrapper.propTypes = {
  children: PropTypes.any,
  confirmBtnCallback: PropTypes.func,
  mainText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string,
  cancelBtnText: PropTypes.string,
  confirmBtnText: PropTypes.string,
  openPopupBox: PropTypes.bool,
  className: PropTypes.string,
};
