import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import SimpleCaretIconSVG from '../../../Icons/SimpleCaretIconSVG';

const BackCaret = styled(SimpleCaretIconSVG)`
  vertical-align: top;
  margin-right: 5px;
`;

const StyledTitle = styled.div`
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
  border-bottom: solid 1px #288dba;
  padding: 10px 13px;
  background-color: #45aad7;
  -webkit-border-top-left-radius: 8px;
  -webkit-border-top-right-radius: 8px;
  -moz-border-radius-topleft: 8px;
  -moz-border-radius-topright: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  ${props =>
    props.hasPrevious &&
    css`
      cursor: pointer;
      &:hover {
        background-color: #288dba;
      }
    `};
`;

export class FormattedTitle extends Component {
  render() {
    return (
      <StyledTitle
        hasPrevious={this.props.hasPrevious}
        onClick={this.props.hasPrevious ? this.props.onClick : undefined}
        className={this.props.className}
      >
        {!this.props.hasPrevious && this.props.messageTitle}
        {this.props.hasPrevious && (
          <Fragment>
            <BackCaret direction="left" size={13.33} fillColor="white" />
            {this.props.messageTitleBack}
          </Fragment>
        )}
      </StyledTitle>
    );
  }
}

FormattedTitle.propTypes = {
  messageTitle: PropTypes.string.isRequired,
  messageTitleBack: PropTypes.string,
  hasPrevious: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
FormattedTitle.defaultProps = {
  messageTitleBack: '-',
  hasPrevious: false,
};

export default FormattedTitle;
