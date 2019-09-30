import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  &:hover > svg > .icon {
    fill: darken(0.30, ${props => props.theme.primaryColor});
  }
  ${props => props.disabled && css`cursor: not-allowed;`}
  ${props => props.size && `width: ${props.size}px;`};
`;
const StyledPath = styled.path`
  fill: ${props => props.theme.primaryColor};
  ${props => (props.viewIconType === undefined || props.viewIconType === 'primary') &&
    css`fill: ${props => props.theme.primaryColor};`}
  ${props => props.viewIconType === 'secondary' &&
    css`fill: rgb(153, 153, 153);`};
`;

export default function ViewIconSVG(props) {
  return (
    <Fragment>
      <SvgWrapper
        id={props.id}
        size={props.size}
        className="ViewIconSVG"
        onClick={props.onClick}
      >
        <svg viewBox="0 0 561 561">
          <StyledPath
            className="icon"
            viewIconType={props.viewIconType}
            d="M280.5,89.25C153,89.25,43.35,168.3,0,280.5c43.35,112.2,153,191.25,280.5,191.25S517.65,392.7,561,280.5    C517.65,168.3,408,89.25,280.5,89.25z M280.5,408C209.1,408,153,351.9,153,280.5c0-71.4,56.1-127.5,127.5-127.5    c71.4,0,127.5,56.1,127.5,127.5C408,351.9,351.9,408,280.5,408z M280.5,204c-43.35,0-76.5,33.15-76.5,76.5    c0,43.35,33.15,76.5,76.5,76.5c43.35,0,76.5-33.15,76.5-76.5C357,237.15,323.85,204,280.5,204z"
          />
        </svg>
      </SvgWrapper>
    </Fragment>
  );
}
ViewIconSVG.propTypes = {
  viewIconType: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.number,
  onClick: PropTypes.func,
  id: PropTypes.string
};

ViewIconSVG.defaultProps = {
  size: 25
};
