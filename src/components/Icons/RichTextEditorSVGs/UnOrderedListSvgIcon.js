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
  left: 6px;
`;

const StyledPath = styled.path`
  fill: #444;
`;

export default function UnorderedListSvgIcon(props) {
  return (
    <SvgWrapper
      size={props.size}
      active={props.active}
      title="Bulleted List"
      className="unOrderedIconSVG"
      height={props.height}
      onMouseDown={props.onMouseDown}
      isDisplayContentInHtml={props.isDisplayContentInHtml}
    >
      <StyledSvg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
      >
        <StyledPath
          d="M7 11H22V13H7zM7 5H22V7H7zM7 17H22V19H7zM3 10.5A1.5 1.5 0 1 0 3 13.5 1.5 1.5 0 1 0 3 10.5zM3 16.5A1.5 1.5 0 1 0 3 19.5 1.5 1.5 0 1 0 3 16.5zM3 4.5A1.5 1.5 0 1 0 3 7.5 1.5 1.5 0 1 0 3 4.5z">
        </StyledPath>
      </StyledSvg>
    </SvgWrapper>
  );
};

UnorderedListSvgIcon.propTypes = {
  size: PropTypes.number,
  active: PropTypes.bool,
  onMouseDown: PropTypes.func,
  height: PropTypes.number,
  isDisplayContentInHtml: PropTypes.bool,
};
UnorderedListSvgIcon.defaultProps = {
  size: 30,
  height: 20,
}
