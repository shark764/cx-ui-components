import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  display: inline-block;
  ${props => props.hoverColor && 
    css`
      &:hover > svg > .icon {
        fill: ${props => props.hoverColor};
      }
    `}
  ${props => props.size && `width: ${props.size}px;`};
  ${props => props.onClick && !props.disabled && 'cursor: pointer'}
  ${props => props.disabled && css`cursor: not-allowed;`}
`;
const StyledPath = styled.path`
  fill: ${props => props.color};
  ${props => !props.color && (props.theme.primaryColor || (props.settingIconType === undefined || props.settingIconType === 'primary')) && 
    css`fill: ${props => props.theme.primaryColor}`};
  ${props => props.settingIconType === 'secondary' && !props.theme.primaryColor && !props.color &&
    css`fill: rgb(153, 153, 153);`};
`;

function GlobeIconSVG(props) {
  return (
    <Fragment>
      <SvgWrapper
        size={props.size}
        className="GlobeIconSVG"
        onClick={props.onClick}
        disabled={props.disabled}
        hoverColor={props.hoverColor}
      >
        <svg viewBox="0 0 1536 1536">
          <StyledPath
            className="icon"
            settingIconType={props.settingIconType}
            color={props.color}
            d="M768 0q209 0 385.5 103T1433 382.5T1536 768t-103 385.5t-279.5 279.5T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0zm274 521q-2 1-9.5 9.5T1019 540q2 0 4.5-5t5-11t3.5-7q6-7 22-15q14-6 52-12q34-8 51 11q-2-2 9.5-13t14.5-12q3-2 15-4.5t15-7.5l2-22q-12 1-17.5-7t-6.5-21q0 2-6 8q0-7-4.5-8t-11.5 1t-9 1q-10-3-15-7.5t-8-16.5t-4-15q-2-5-9.5-11t-9.5-10q-1-2-2.5-5.5t-3-6.5t-4-5.5t-5.5-2.5t-7 5t-7.5 10t-4.5 5q-3-2-6-1.5t-4.5 1t-4.5 3t-5 3.5q-3 2-8.5 3t-8.5 2q15-5-1-11q-10-4-16-3q9-4 7.5-12t-8.5-14h5q-1-4-8.5-8.5T1002 310t-13-6q-8-5-34-9.5t-33-.5q-5 6-4.5 10.5t4 14T925 331q1 6-5.5 13t-6.5 12q0 7 14 15.5t10 21.5q-3 8-16 16t-16 12q-5 8-1.5 18.5T914 456q2 2 1.5 4t-3.5 4.5t-5.5 4t-6.5 3.5l-3 2q-11 5-20.5-6T863 442q-7-25-16-30q-23-8-29 1q-5-13-41-26q-25-9-58-4q6-1 0-15q-7-15-19-12q3-6 4-17.5t1-13.5q3-13 12-23q1-1 7-8.5t9.5-13.5t.5-6q35 4 50-11q5-5 11.5-17t10.5-17q9-6 14-5.5t14.5 5.5t14.5 5q14 1 15.5-11t-7.5-20q12 1 3-17q-4-7-8-9q-12-4-27 5q-8 4 2 8q-1-1-9.5 10.5T801 218t-16-5q-1-1-5.5-13.5T770 186q-8 0-16 15q3-8-11-15t-24-8q19-12-8-27q-7-4-20.5-5t-19.5 4q-5 7-5.5 11.5t5 8T681 175t11.5 4t8.5 3q14 10 8 14q-2 1-8.5 3.5T689 204t-6 4q-3 4 0 14t-2 14q-5-5-9-17.5t-7-16.5q7 9-25 6l-10-1q-4 0-16 2t-20.5 1t-13.5-8q-4-8 0-20q1-4 4-2q-4-3-11-9.5t-10-8.5q-46 15-94 41q6 1 12-1q5-2 13-6.5t10-5.5q34-14 42-7l5-5q14 16 20 25q-7-4-30-1q-20 6-22 12q7 12 5 18q-4-3-11.5-10T498 211t-15-5q-16 0-22 1q-146 80-235 222q7 7 12 8q4 1 5 9t2.5 11t11.5-3q9 8 3 19q1-1 44 27q19 17 21 21q3 11-10 18q-1-2-9-9t-9-4q-3 5 .5 18.5T308 557q-7 0-9.5 16t-2.5 35.5t-1 23.5l2 1q-3 12 5.5 34.5T324 687q-13 3 20 43q6 8 8 9q3 2 12 7.5t15 10t10 10.5q4 5 10 22.5t14 23.5q-2 6 9.5 20t10.5 23q-1 0-2.5 1t-2.5 1q3 7 15.5 14t15.5 13q1 3 2 10t3 11t8 2q2-20-24-62q-15-25-17-29q-3-5-5.5-15.5T421 787q2 0 6 1.5t8.5 3.5t7.5 4t2 3q-3 7 2 17.5t12 18.5t17 19t12 13q6 6 14 19.5t0 13.5q9 0 20 10.5t17 19.5q5 8 8 26t5 24q2 7 8.5 13.5t12.5 9.5l16 8l13 7q5 2 18.5 10.5T642 1040q10 4 16 4t14.5-2.5t13.5-3.5q15-2 29 15t21 21q36 19 55 11q-2 1 .5 7.5t8 15.5t9 14.5t5.5 8.5q5 6 18 15t18 15q6-4 7-9q-3 8 7 20t18 10q14-3 14-32q-31 15-49-18q0-1-2.5-5.5t-4-8.5t-2.5-8.5t0-7.5t5-3q9 0 10-3.5t-2-12.5t-4-13q-1-8-11-20t-12-15q-5 9-16 8t-16-9q0 1-1.5 5.5t-1.5 6.5q-13 0-15-1q1-3 2.5-17.5t3.5-22.5q1-4 5.5-12t7.5-14.5t4-12.5t-4.5-9.5T775 954q-19 1-26 20q-1 3-3 10.5t-5 11.5t-9 7q-7 3-24 2t-24-5q-13-8-22.5-29t-9.5-37q0-10 2.5-26.5t3-25T652 858q3-2 9-9.5t10-10.5q2-1 4.5-1.5t4.5 0t4-1.5t3-6q-1-1-4-3q-3-3-4-3q7 3 28.5-1.5T735 823q15 11 22-2q0-1-2.5-9.5T754 798q5 27 29 9q3 3 15.5 5t17.5 5q3 2 7 5.5t5.5 4.5t5-.5t8.5-6.5q10 14 12 24q11 40 19 44q7 3 11 2t4.5-9.5t0-14T887 854l-1-8v-18l-1-8q-15-3-18.5-12t1.5-18.5t15-18.5q1-1 8-3.5t15.5-6.5t12.5-8q21-19 15-35q7 0 11-9q-1 0-5-3t-7.5-5t-4.5-2q9-5 2-16q5-3 7.5-11t7.5-10q9 12 21 2q8-8 1-16q5-7 20.5-10.5t18.5-9.5q7 2 8-2t1-12t3-12q4-5 15-9t13-5l17-11q3-4 0-4q18 2 31-11q10-11-6-20q3-6-3-9.5t-15-5.5q3-1 11.5-.5t10.5-1.5q15-10-7-16q-17-5-43 12zm-163 877q206-36 351-189q-3-3-12.5-4.5t-12.5-3.5q-18-7-24-8q1-7-2.5-13t-8-9t-12.5-8t-11-7q-2-2-7-6t-7-5.5t-7.5-4.5t-8.5-2t-10 1l-3 1q-3 1-5.5 2.5t-5.5 3t-4 3t0 2.5q-21-17-36-22q-5-1-11-5.5t-10.5-7t-10-1.5t-11.5 7q-5 5-6 15t-2 13q-7-5 0-17.5t2-18.5q-3-6-10.5-4.5t-12 4.5t-11.5 8.5t-9 6.5t-8.5 5.5t-8.5 7.5q-3 4-6 12t-5 11q-2-4-11.5-6.5t-9.5-5.5q2 10 4 35t5 38q7 31-12 48q-27 25-29 40q-4 22 12 26q0 7-8 20.5t-7 21.5q0 6 2 16z"
          />
        </svg>
      </SvgWrapper>
    </Fragment>
  );
}
GlobeIconSVG.propTypes = {
  size: PropTypes.number,
  settingIconType: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  hoverColor: PropTypes.string
};

GlobeIconSVG.defaultProps = {
  size: 23
};

export default GlobeIconSVG;
