import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  &:hover > svg > .icon {
    fill: rgb(101, 101, 101);
  }
  ${props => props.size && `width: ${props.size}px;`};
`;
const StyledPath = styled.path`
  fill: ${props => props.theme.primaryColor};

  ${props =>
    (props.closeIconType === undefined || props.closeIconType === 'primary') &&
    css`
      fill: ${props => props.theme.primaryColor};
    `} 
  ${props =>
    props.closeIconType === 'secondary' &&
    css`
      fill: rgb(153, 153, 153);
    `};
`;

function CloseIconSVG(props) {
  return (
    <Fragment>
      <SvgWrapper size={props.size} className="CloseIconSVG" onClick={props.onClick}>
        <svg viewBox="0 0 384 512">
          <StyledPath
            className="icon"
            closeIconType={props.closeIconType}
            d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"
          />
        </svg>
      </SvgWrapper>
    </Fragment>
  );
}
CloseIconSVG.propTypes = {
  closeIconType: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.number,
  onClick: PropTypes.func,
};

CloseIconSVG.defaultProps = {
  size: 25,
};

export default CloseIconSVG;
