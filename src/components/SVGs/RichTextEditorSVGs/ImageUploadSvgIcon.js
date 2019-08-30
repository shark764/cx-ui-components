import React, { Fragment } from 'react';
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

export default function ImageUploadSvgIcon(props) {
  return (
    <Fragment>
      <SvgWrapper
        size={props.size}
        active={props.active}
        title="Insert image"
        height={props.height}
        className="imageInsertIconSVG"
        onMouseDown={props.onMouseDown}
        onClick={props.onClick}
        isDisplayContentInHtml={props.isDisplayContentInHtml}
      >
        <StyledSvg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
        >
          <StyledPath
            d="M 2 4 L 2 20 L 12 20 L 12 17 L 5 17 L 8.5 12.5 L 11 15.509766 L 14.5 11 L 15.25 12 L 22 12 L 22 4 L 2 4 z M 18 14 L 18 18 L 14 18 L 14 20 L 18 20 L 18 24 L 20 24 L 20 20 L 24 20 L 24 18 L 20 18 L 20 14 L 18 14 z">
          </StyledPath>
        </StyledSvg>
      </SvgWrapper>
    </Fragment>
  );
};

ImageUploadSvgIcon.propTypes = {
  size: PropTypes.number,
  active: PropTypes.bool,
  onMouseDown: PropTypes.func,
  onClick: PropTypes.func,
  height: PropTypes.number,
  isDisplayContentInHtml: PropTypes.bool,
};

ImageUploadSvgIcon.defaultProps = {
  size: 30,
  height: 20,
};
