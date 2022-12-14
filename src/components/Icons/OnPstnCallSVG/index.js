import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../';

const SvgWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  ${props => props.size && `width: ${props.size}px;`};
`;

function OnPstnCallSVG(props) {
  return (
    <Fragment>
      <style>
        {`
        .OnPstnCallSVGbackground {
            fill: ${colors.regularRed};
            stroke:${colors.regularRed};
            stroke-miterlimit:10;
            stroke-width:'2px'
        }
        .OnPstnCallSVGforeground {
            fill: ${colors.offWhite};
        }
        .OnPstnCallSVG:hover > svg > .OnPstnCallSVGbackground {
            fill: #CB3750;
        }
      `}
      </style>
      <SvgWrapper size={props.size} className={`OnPstnCallSVG ${props.className}`} onClick={props.onClick}>
        <svg version="1.1" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg">
          <g>
            <g>
              <path
                style={{ fill: 'rgb(7, 41, 49)' }}
                d="M36.2,1C16.7,2,1.2,18.2,1.3,37.8c0,6,1.5,11.6,4,16.6L1.4,73.3c-0.2,1,0.7,1.9,1.7,1.7l18.5-4.4    c4.8,2.4,10.1,3.7,15.8,3.8c20,0.3,36.6-15.6,37.3-35.5C75.4,17.5,57.7,0,36.2,1z M58.3,58c-5.4,5.4-12.6,8.4-20.3,8.4    c-4.5,0-8.8-1-12.8-3l-2.6-1.3l-11.4,2.7l2.4-11.6l-1.3-2.5c-2.1-4.1-3.1-8.4-3.1-13c0-7.7,3-14.9,8.4-20.3C23.1,12,30.4,9,38,9    c7.7,0,14.9,3,20.3,8.4c5.4,5.4,8.4,12.6,8.4,20.3C66.7,45.3,63.7,52.6,58.3,58z"
              />
              <path
                style={{ fill: 'rgb(7, 41, 49)' }}
                d="M55.8,45.7l-7.1-2c-0.9-0.3-1.9,0-2.6,0.7l-1.7,1.8c-0.7,0.7-1.8,1-2.8,0.6c-3.4-1.4-10.4-7.7-12.2-10.8    c-0.5-0.9-0.4-2,0.2-2.9l1.5-2c0.6-0.8,0.7-1.8,0.3-2.7l-3-6.8c-0.7-1.6-2.8-2.1-4.1-0.9c-2,1.7-4.3,4.2-4.6,7.1    c-0.5,5,1.6,11.3,9.7,18.8c9.3,8.7,16.8,9.9,21.7,8.7c2.8-0.7,5-3.3,6.4-5.5C58.3,48.1,57.5,46.1,55.8,45.7z"
              />
            </g>
          </g>
        </svg>
      </SvgWrapper>
    </Fragment>
  );
}
OnPstnCallSVG.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

OnPstnCallSVG.defaultProps = {
  size: 25,
};

export default OnPstnCallSVG;
