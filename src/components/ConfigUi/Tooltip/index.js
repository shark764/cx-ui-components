import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`

const TooltipContainer = styled.div`
  position: absolute;
  width: ${props => props.tooltipProps.width};
  max-width: ${props => props.tooltipProps.width};
  margin: 10px 0 20px 0px;
  padding: 6px;
  left: 50%;
  border-radius: 4px;
  background-color: ${props => props.tooltipProps.background};
  color: ${props => props.tooltipProps.fontColor};
  transform: translateX(-50%);
  z-index: 500;
  white-space: break-spaces;

  &::before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);
  }
  &.top {
    bottom: 50%;
  }
  &.top::before {
    top: 100%;
    border-top-color: ${props => props.tooltipProps.background};
  }
  &.right {
    top: 15%;
    left: 100%;
    margin-left: 7px;
    transform: translateX(0) translateY(-50%);
  }
  &.right::before {
    left: calc(6px * -1);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-right-color: ${props => props.tooltipProps.background};
  }
  &.bottom::before {
    bottom: 100%;
    border-bottom-color: ${props => props.tooltipProps.background};
  }
  &.left {
    left: auto;
    right: calc(100% + 10px);
    top: 15%;
    transform: translateX(0) translateY(-50%);
  }
  &.left::before {
    left: auto;
    right: calc(6px * -2);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-left-color: ${props => props.tooltipProps.background};
  }
`

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTip: false };
  }

  render() {
    return (
      <TooltipWrapper
        onMouseEnter={() => this.setState({ showTip: true })}
        onMouseLeave={() => this.setState({ showTip: false })}
        onPointerLeave={() => this.setState({ showTip: false })}
      >
        {this.props.children}
        {this.state.showTip && (
          <TooltipContainer
            className={`Tooltip-Tip ${this.props.direction || "bottom"}`}
            tooltipProps={this.props.tooltipProps}
          >
            {this.props.content}
          </TooltipContainer>
        )}
      </TooltipWrapper>
    );
  }
}

Tooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  direction: PropTypes.string,
  content: PropTypes.any,
  tooltipProps: PropTypes.object
};

Tooltip.defaultProps = {
  tooltipProps: {
    background: '#000000',
    fontColor: '#FFFFFF',
    width: '200px'
  }
}

export default Tooltip;
