import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  display: inline-block;
  ${props => props.size && `width: ${props.size}px;`};
  ${props => props.disabled && css`cursor: not-allowed;`}
`;

const StyledPath = styled.path`
  fill: ${props => (props.maxIndicatorType > 99 || props.maxCapacity) ? '#F08695' : '#51CE90'};
`;
const StyledPath2 = styled.path`
  fill: #FFFFFF;
`;

function MaxIndicatorSVG(props) {
  const { weight, size, onClick, disabled, maxCapacity } = props;
  return (
    <Fragment>
      <SvgWrapper
        size={size}
        className="MaxIndicatorSVG"
        onClick={onClick}
        disabled={disabled}
      >
        <svg viewBox="0,0,2000,2000" style={{ enableBackground: 'new 0 0 2000 2000' }}>
          {weight > 0 && <g id="layer0">
            <StyledPath
              maxIndicatorType={weight}
              maxCapacity={maxCapacity}
              d="M1977.78,1000C1977.78,1540.02 1540.02,1977.78 1000,1977.78C459.984,1977.78 22.2154,1540.02 22.2154,1000C22.2154,459.984 459.984,22.2154 1000,22.2154C1540.02,22.2154 1977.78,459.984 1977.78,1000Z" />
          </g>}
          {weight > 0 && weight < 99 && !maxCapacity && <g id="layer1">
            <StyledPath2
              d="M999.998,232.713C1423.76,232.713 1767.28,576.239 1767.29,1000C1767.29,1423.76 1423.76,1767.29 999.998,1767.29L999.998,1000L999.998,232.713Z" />
          </g>}
        </svg>
      </SvgWrapper>
    </Fragment>
  );
}

MaxIndicatorSVG.propTypes = {
  size: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  weight: PropTypes.number,
  maxCapacity: PropTypes.bool
};

MaxIndicatorSVG.defaultProps = {
  size: 25,
  weight: 0
};

export default MaxIndicatorSVG;