import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  display: inline-block;
  ${props => props.size && `width: ${props.size}px;`};
  ${props =>
    props.searchIconType === 'searchBox' &&
    css`
      width: 15px;
    `};
`;
const StyledPath = styled.path`
  ${props =>
    props.searchIconType === 'primary' &&
    css`
      fill: ${props => props.theme.primaryColor};
    `} 
  ${props =>
    props.searchIconType === 'searchBox' &&
    css`
      fill: white;
    `};
  ${props =>
    props.searchIconType === 'inlineSearchBox' &&
    css`
      fill: #999999;
    `};
`;

function SearchIconSVG(props) {
  return (
    <SvgWrapper
      size={props.size}
      className={props.className}
      onClick={props.onClick}
      searchIconType={props.searchIconType}
    >
      <svg viewBox="0 0 512 512">
        <StyledPath
          searchIconType={props.searchIconType}
          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
        />
      </svg>
    </SvgWrapper>
  );
}
SearchIconSVG.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  searchIconType: PropTypes.oneOf(['primary', 'searchBox', 'inlineSearchBox']),
  onClick: PropTypes.func,
};

export default SearchIconSVG;
