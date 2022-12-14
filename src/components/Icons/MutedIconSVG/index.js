import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../';

const SvgWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  ${props => props.size && `width: ${props.size}px;`};
`;

function MutedIconSVG(props) {
  return (
    <Fragment>
      <style>
        {`
        .MutedIconSVGbackground {
            fill: ${colors.darkGreen};
            stroke:${colors.black};
            stroke-miterlimit:10;
            stroke-width:'2px'
        }
        .MutedIconSVGforeground {
            fill: ${colors.offWhite};
        }
        .MutedIconSVG:hover > svg > .MutedIconSVGbackground {
            fill: ${colors.hoverDarkGreen};
        }
      `}
      </style>
      <SvgWrapper
        size={props.size}
        className="MutedIconSVG"
        onClick={props.onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362 362">
          <title>microphoneMuted</title>
          <circle
            className="MutedIconSVGbackground"
            cx="181"
            cy="181"
            r="180"
          />
          <line
            x1="146.63"
            y1="272.69"
            x2="220.55"
            y2="272.69"
            style={{
              fill: 'none',
              stroke: colors.offWhite,
              strokeLinecap: 'round',
              strokeMiterlimit: '10',
              strokeWidth: '17px',
            }}
          />
          <path
            d="M210,174.88a42,42,0,0,1,38-24.23h5.48a42,42,0,0,1,41.9,41.9v57.32A41.73,41.73,0,0,1,293.5,262"
            transform="translate(-69 -69)"
            style={{
              fill: 'none',
              stroke: colors.offWhite,
              strokeLinecap: 'round',
              strokeMiterlimit: '10',
              strokeWidth: '12px',
            }}
          />
          <path
            d="M279.57,282.53a41.61,41.61,0,0,1-26.16,9.24h-5.48a42,42,0,0,1-41.9-41.9v-46.5"
            transform="translate(-69 -69)"
            style={{
              fill: 'none',
              stroke: colors.offWhite,
              strokeLinecap: 'round',
              strokeMiterlimit: '10',
              strokeWidth: '12px',
            }}
          />
          <path
            d="M292.46,298.27c-11.06,8.63-26.76,15.58-41.79,15.58h0a65.48,65.48,0,0,1-65.29-65.29V234.18"
            transform="translate(-69 -69)"
            style={{
              fill: 'none',
              stroke: colors.offWhite,
              strokeLinecap: 'round',
              strokeMiterlimit: '10',
              strokeWidth: '12px',
            }}
          />
          <path
            d="M316,234.18v14.38a64.73,64.73,0,0,1-8.88,32.77"
            transform="translate(-69 -69)"
            style={{
              fill: 'none',
              stroke: colors.offWhite,
              strokeLinecap: 'round',
              strokeMiterlimit: '10',
              strokeWidth: '12px',
            }}
          />
          <line
            x1="115.49"
            y1="78.5"
            x2="257.86"
            y2="235.29"
            style={{
              fill: 'none',
              stroke: colors.offWhite,
              strokeLinecap: 'round',
              strokeMiterlimit: '10',
              strokeWidth: '14px',
            }}
          />
        </svg>
      </SvgWrapper>
    </Fragment>
  );
}

MutedIconSVG.propTypes = {
  size: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};
MutedIconSVG.defaultProps = {
  size: 25,
};

export default MutedIconSVG;
