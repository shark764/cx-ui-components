import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  border-radius: 5px;
  cursor: pointer;
  margin: 6px;
  display: inline-block;
  ${props => props.size && css`width: ${props.size}px;`}
  ${props => props.height && css`height: ${props.height}px;`}
  ${props => props.active && css`background-color: rgba(32,33,36,0.122);`}
  :hover {
    ${props => !props.active && css`background-color: rgba(0, 0, 0, 0.07);`}
  };
  ${props => props.isDisplayContentInHtml && css`pointer-events: none;`}
`;

const StyledSvg = styled.svg`
  position: relative;
  top: 1px;
  left: 3px;
`;

const StyledPath = styled.path`
  fill: #444;
`;

export default function OrderedListSvgIcon(props) {
  return (
    <SvgWrapper
      size={props.size}
      active={props.active}
      title="Numbered List"
      className="orderedListIconSVG"
      height={props.height}
      onMouseDown={props.onMouseDown}
      isDisplayContentInHtml={props.isDisplayContentInHtml}
    >
      <StyledSvg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
      >
        <StyledPath
          d="M7 11H22V13H7zM7 5H22V7H7zM7 17H22V19H7zM4 8L3 8 3 5 2 5 2 4 4 4zM5 14L2 14 2 12.8 3.8 11 2 11 2 10 5 10 5 11.2 3.2 13 5 13zM5 20L2 20 2 19 4 19 4 17 2 17 2 16 5 16z">
        </StyledPath>
        <StyledPath d="M3 17.5H5V18.5H3z"></StyledPath>
      </StyledSvg>
    </SvgWrapper>
  )
};

OrderedListSvgIcon.propTypes = {
  size: PropTypes.number,
  active: PropTypes.bool,
  onMouseDown: PropTypes.func,
  height: PropTypes.number,
  isDisplayContentInHtml: PropTypes.bool,
};

OrderedListSvgIcon.defaultProps = {
  size: 30,
  height: 20,
};
