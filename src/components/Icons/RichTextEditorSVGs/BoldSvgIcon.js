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
  top: 4px;
  left: 4px;
`;

const StyledPath = styled.path`
  fill: #444;
`;

export default function BoldSvgIcon(props) {
  return (
    <SvgWrapper
      size={props.size}
      active={props.active}
      title="Bold (Ctrl-B)"
      className="boldIconSVG"
      height={props.height}
      onMouseDown={props.onMouseDown}
      isDisplayContentInHtml={props.isDisplayContentInHtml}
    >
      <StyledSvg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        preserveAspectRatio="xMidYMid"
      >
        <StyledPath
          d="M 2.898438 24 L 2.898438 0 L 10.800781 0 C 13.800781 0 16.101563 0.601563 17.800781 1.699219 C 19.5 2.800781 20.300781 4.5 20.300781 6.601563 C 20.300781 7.699219 20 8.800781 19.5 9.601563 C 19 10.5 18.101563 11.199219 17 11.601563 C 18.398438 11.898438 19.5 12.5 20.199219 13.5 C 20.898438 14.5 21.199219 15.601563 21.199219 16.800781 C 21.199219 19.101563 20.398438 20.898438 18.800781 22.101563 C 17.199219 23.300781 15 24 12 24 Z M 8.398438 10 L 10.601563 10 C 11.898438 10 12.898438 9.800781 13.601563 9.300781 C 14.300781 8.800781 14.601563 8.101563 14.601563 7.199219 C 14.601563 6.199219 14.300781 5.398438 13.601563 5 C 12.898438 4.601563 12 4.300781 10.699219 4.300781 L 8.398438 4.300781 Z M 8.398438 13.699219 L 8.398438 19.699219 L 12 19.699219 C 13.199219 19.699219 14.101563 19.5 14.699219 19 C 15.300781 18.5 15.601563 17.800781 15.601563 16.800781 C 15.601563 15.800781 15.300781 15 14.800781 14.5 C 14.300781 14 13.398438 13.699219 12.199219 13.699219 Z ">
        </StyledPath>
      </StyledSvg>
    </SvgWrapper>
  )
};

BoldSvgIcon.propTypes = {
  size: PropTypes.number,
  active: PropTypes.bool,
  onMouseDown: PropTypes.func,
  height: PropTypes.number,
  isDisplayContentInHtml: PropTypes.bool,
};

BoldSvgIcon.defaultProps = {
  size: 20,
  height: 20,
};
