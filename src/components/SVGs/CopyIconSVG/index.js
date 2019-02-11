import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  &:hover > svg > .icon {
    fill: darken(${props => props.theme.primaryColor}, 30%);
  }
  ${props => props.disabled && css`cursor: not-allowed;`}
  ${props => props.size && `width: ${props.size}px;`};
`;
const StyledPath = styled.path`
  fill: ${props => props.theme.primaryColor};
  ${props => (props.copyIconType === undefined || props.copyIconType === 'primary') &&
    css`fill: ${props => props.theme.primaryColor};`} 
  ${props => props.copyIconType === 'secondary' &&
    css`fill: rgb(153, 153, 153);`};
`;

export default function CopyIconSVG(props) {
  return (
    <Fragment>
      <SvgWrapper id={props.id} size={props.size} className="CopyIconSVG" onClick={props.onClick}>
        <svg viewBox="0 0 448 512">
          <StyledPath
            className="icon"
            copyIconType={props.copyIconType}
            d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
          />
        </svg>
      </SvgWrapper>
    </Fragment>
  );
}
CopyIconSVG.propTypes = {
  copyIconType: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.number,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

CopyIconSVG.defaultProps = {
  size: 25,
};

