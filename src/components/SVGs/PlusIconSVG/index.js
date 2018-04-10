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
    (props.plusIconType === undefined || props.plusIconType === 'primary') &&
    css`
      fill: ${props => props.theme.primaryColor};
    `} ${props =>
    props.editIconType === 'secondary' &&
    css`
      fill: rgb(153, 153, 153);
    `};
`;

function PlusIconSVG(props) {
  return (
    <Fragment>
      <SvgWrapper size={props.size} className="PlusIconSVG" onClick={props.onClick}>
        <svg viewBox="0 0 448 512">
          <StyledPath
            className="icon"
            plusIconType={props.plusIconType}
            d="M448 294.2v-76.4c0-13.3-10.7-24-24-24H286.2V56c0-13.3-10.7-24-24-24h-76.4c-13.3 0-24 10.7-24 24v137.8H24c-13.3 0-24 10.7-24 24v76.4c0 13.3 10.7 24 24 24h137.8V456c0 13.3 10.7 24 24 24h76.4c13.3 0 24-10.7 24-24V318.2H424c13.3 0 24-10.7 24-24z"
          />
        </svg>
      </SvgWrapper>
    </Fragment>
  );
}
PlusIconSVG.propTypes = {
  size: PropTypes.number,
  plusIconType: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
};

PlusIconSVG.defaultProps = {
  size: 25,
};

export default PlusIconSVG;
