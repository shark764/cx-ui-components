import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../';

const SvgWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  ${props => props.size && `width: ${props.size}px;`};
`;

function UnMutedIconSVG(props) {
  return (
    <Fragment>
      <style>
        {`
        .UnMutedIconSVGbackground {
            fill: ${colors.darkGreen};
            stroke:${colors.black};
            stroke-miterlimit:10;
            stroke-width:'2px'
        }
        .UnMutedIconSVGforeground {
            fill: ${colors.offWhite};
        }
        .UnMutedIconSVG:hover > svg > .UnMutedIconSVGbackground {
            fill: ${colors.hoverDarkGreen};
        }
      `}
      </style>
      <SvgWrapper
        size={props.size}
        className="UnMutedIconSVG"
        onClick={props.onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 362 362">
          <title>microphone</title>
          <circle
            className="UnMutedIconSVGbackground"
            cx="181"
            cy="181"
            r="180"
          />
          <line
            x1="145.96"
            y1="276.52"
            x2="219.88"
            y2="276.52"
            style={{
              fill: 'none',
              stroke: colors.offWhite,
              strokeLinecap: 'round',
              strokMiterlimit: '10',
              strokeWidth: '17px',
            }}
          />
          <rect
            x="136.36"
            y="85.48"
            width="89.28"
            height="141.11"
            rx="44.64"
            ry="44.64"
            style={{
              fill: 'none',
              stroke: colors.offWhite,
              strokeMiterlimit: '10',
              strokeWidth: '12px',
            }}
          />
          <path
            d="M315.29,238v14.38A65.48,65.48,0,0,1,250,317.68h0a65.48,65.48,0,0,1-65.29-65.29V238"
            transform="translate(-69 -69)"
            style={{
              fill: 'none',
              stroke: colors.offWhite,
              strokeLinecap: 'round',
              strokeMiterlimit: '10',
              strokeWidth: '12px',
            }}
          />
        </svg>
      </SvgWrapper>
    </Fragment>
  );
}
UnMutedIconSVG.propTypes = {
  size: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

UnMutedIconSVG.defaultProps = {
  size: 25,
};

export default UnMutedIconSVG;
