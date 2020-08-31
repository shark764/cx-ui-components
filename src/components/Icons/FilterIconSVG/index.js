import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  &:hover > svg > .icon {
    fill: darken(0.3, ${props => props.theme.primaryColor});
  }
  ${props => props.size && `width: ${props.size}px;`};
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `};
`;
const SVGStyles = css`
  fill: ${props => props.theme.primaryColor};
  ${props =>
    (props.filterIconType === undefined || props.filterIconType === 'primary') &&
    css`
      fill: ${props => props.theme.primaryColor};
    `};
  ${props =>
    props.filterIconType === 'secondary' &&
    css`
      fill: rgb(153, 153, 153);
    `};
  ${props =>
    props.fillColor !== undefined &&
    css`
      fill: ${props => props.fillColor};
    `};
`;
const StyledPath = styled.path`
  ${SVGStyles};
`;

function FilterIconSVG(props) {
  return (
    <Fragment>
      <SvgWrapper size={props.size} className={`FilterIconSVG ${props.className}`} onClick={props.onClick}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 321.9 321.9">
          <StyledPath
            filterIconType={props.filterIconType}
            className="icon"
            d="M128.25,175.6c1.7,1.8,2.7,4.1,2.7,6.6v139.7l60-51.3v-88.4c0-2.5,1-4.8,2.7-6.6L295.15,65H26.75L128.25,175.6z"
            fillColor={props.fillColor}
          />
          <rect xmlns="http://www.w3.org/2000/svg" x="13.95" y="0" width="294" height="45" />
        </svg>
      </SvgWrapper>
    </Fragment>
  );
}
FilterIconSVG.propTypes = {
  filterIconType: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
  fillColor: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
};

FilterIconSVG.defaultProps = {
  filterIconType: 'primary',
  size: 25,
};

export default FilterIconSVG;
