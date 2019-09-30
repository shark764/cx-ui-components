import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SvgOuterWrapper = styled.div`
  display: inline-block;
  margin-left: 15px;
`;
const SvgInnerWrapper = styled.div`
  display: inline-block;
  ${props => props.size && `width: ${props.size}px;`};
`;

function CaretIconSVG(props) {
  return (
    <SvgOuterWrapper className={props.className}>
      <SvgInnerWrapper size={props.size}>
        {props.direction === 'down' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.21 88.74">
            <polyline
              points="10.5 10.5 76.69 74.21 143.71 10.5"
              style={{
                fill: 'none',
                stroke: props.strokeColor,
                strokeLinecap: 'round',
                strokeMiterlimit: '10',
                strokeWidth: '21px',
              }}
            />
          </svg>
        )}
        {props.direction === 'up' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.21 88.74">
            <polyline
              points="143.71 78.24 77.52 14.53 10.5 78.24"
              style={{
                fill: 'none',
                stroke: props.strokeColor,
                strokeLinecap: 'round',
                strokeMiterlimit: '10',
                strokeWidth: '21px',
              }}
            />
          </svg>
        )}
        {props.direction === 'right' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133 107.29">
            <path
              d="M194,293.14,306,250h0L194,206.86"
              transform="translate(-183.5 -196.36)"
              style={{
                fill: 'none',
                stroke: props.strokeColor,
                strokeLinecap: 'round',
                strokeMiterlimit: '10',
                strokeWidth: '21px',
              }}
            />
          </svg>
        )}
        {props.direction === 'left' && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133 107.29">
            <path
              d="M306,206.86,194,250h0l112,43.14"
              transform="translate(-183.5 -196.36)"
              style={{
                fill: 'none',
                stroke: props.strokeColor,
                strokeLinecap: 'round',
                strokeMiterlimit: '10',
                strokeWidth: '21px',
              }}
            />
          </svg>
        )}
      </SvgInnerWrapper>
    </SvgOuterWrapper>
  );
}

CaretIconSVG.propTypes = {
  /**
   * To allow styled components styles to be passed down to this compnent as needed.
   */
  className: PropTypes.string,
  /**
   * size === number in pixels
   */
  size: PropTypes.number,
  /**
   * The direction the caret will point , "up" , "right", "down", or "left"
   */
  direction: PropTypes.string.isRequired,
  /**
   * Color in CSS supported color format
   */
  strokeColor: PropTypes.string,
};
CaretIconSVG.defaultProps = {
  strokeColor: '#07487a',
  size: 12,
};

export default CaretIconSVG;
