import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  &:hover > svg > .icon {
    fill: darken(0.3, ${props => props.theme.primaryColor});
  }
  ${props => props.size && `width: ${props.size}px;`};
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `};
`;

const channelIconColor = (channelIconType, primaryColor) => {
  switch (channelIconType) {
    case 'secondary':
      return 'rgb(153, 153, 153)';
    case 'in-focus':
      return 'rgb(117, 212, 147)';
    case 'out-of-focus':
      return 'rgb(236, 85, 104)';
    case 'primary':
    default:
      return primaryColor;
  }
};

const StyledPath = styled.path`
  fill: ${props => channelIconColor(props.channelIconType, props.theme.primaryColor)};
`;

function ChannelIconSVG(props) {
  let viewBox = '0 0 22.68 22.68',
    iconPath =
      'M12,17.54c-4.35,0-7.94-3.08-8-6.85V8.5a1,1,0,0,1,2,0v2.18c0,2.67,2.72,4.86,6,4.86s6-2.18,6-4.86V8.5a1,1,0,0,1,2,0v2.23C19.92,14.48,16.33,17.54,12,17.54Z',
    animateValues =
      'rgb(117, 212, 147); rgb(30, 232, 95); rgb(0, 255, 81); rgb(53, 222, 107); rgb(72, 219, 119); rgb(117, 212, 147);';
  if (props.channelIconType === 'out-of-focus') {
    animateValues = 'rgb(236, 85, 104); rgb(219, 50, 72); rgb(222, 64, 84); rgb(230, 83, 102); rgb(236, 85, 104);';
  }
  switch (props.channelType) {
    case 'messaging':
      iconPath =
        'M7.71,21.15,6.56,16.53H3.34a2,2,0,0,1-2-2v-10a3,3,0,0,1,3-3h14a3,3,0,0,1,3,3v10a2,2,0,0,1-2,2h-4.7ZM4.34,3.53a1,1,0,0,0-1,1v10H8.12L9,17.91,14,14.53h5.3v-10a1,1,0,0,0-1-1Z';
      break;
    case 'email':
      iconPath =
        'M19.74,2.94H2.94A2.1,2.1,0,0,0,.84,5v12.6a2.1,2.1,0,0,0,2.1,2.1h16.8a2.1,2.1,0,0,0,2.1-2.1V5a2.1,2.1,0,0,0-2.1-2.1m0,14.7H2.94V7.14l8.4,5.25,8.4-5.25v10.5m0-12.6-8.4,5.25L2.94,5h16.8Z';
      break;
    case 'sms':
      iconPath =
        'M15.84,16.66h-9V4.25h9m-4.5,16a1.34,1.34,0,1,1,0-2.66,1.34,1.34,0,1,1,0,2.66m4-18.61h-8a2.37,2.37,0,0,0-2.5,2.22V18.87a2.37,2.37,0,0,0,2.5,2.22h8a2.37,2.37,0,0,0,2.5-2.22V3.81A2.37,2.37,0,0,0,15.34,1.59Z';
      break;
    case 'workItem':
      iconPath =
        'M19.34,5.84a1.87,1.87,0,0,1,1.42.59,2,2,0,0,1,.58,1.41v11a2,2,0,0,1-.58,1.41,1.87,1.87,0,0,1-1.42.59h-16a1.87,1.87,0,0,1-1.42-.59,2,2,0,0,1-.58-1.41v-11a2,2,0,0,1,.58-1.41,1.87,1.87,0,0,1,1.42-.59h4v-2a1.9,1.9,0,0,1,.58-1.42,1.9,1.9,0,0,1,1.42-.58h4a1.9,1.9,0,0,1,1.42.58,1.9,1.9,0,0,1,.58,1.42v2h4m-16,2v11h16v-11h-16m10-2v-2h-4v2Z';
      break;
    case 'voice':
    default:
      viewBox = '0 0 24 24';
      break;
  }
  const animationContent = props.animated &&
    (props.channelIconType === 'in-focus' || props.channelIconType === 'out-of-focus') && (
      <animate attributeType="XML" attributeName="fill" values={animateValues} dur="0.9s" repeatCount="indefinite" />
    );
  return (
    <Fragment>
      <SvgWrapper size={props.size} className={`ChannelIconSVG ${props.className}`} onClick={props.onClick}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox={viewBox}>
          <StyledPath channelIconType={props.channelIconType} className="icon" d={iconPath}>
            {animationContent}
          </StyledPath>
          {props.channelType === 'voice' && (
            <StyledPath
              channelIconType={props.channelIconType}
              className="icon"
              d="M12,13.62a3.9,3.9,0,0,1-4-3.8V6.3a3.9,3.9,0,0,1,4-3.8,4,4,0,0,1,4,3.86V9.88A3.89,3.89,0,0,1,12,13.62ZM12,4.5a1.9,1.9,0,0,0-2,1.8V9.82a1.89,1.89,0,0,0,2,1.8,1.9,1.9,0,0,0,2-1.74V6.36A2,2,0,0,0,12,4.5Z"
            >
              {animationContent}
            </StyledPath>
          )}
          {props.channelType === 'voice' && (
            <StyledPath
              channelIconType={props.channelIconType}
              className="icon"
              d="M15,21.5H9a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"
            >
              {animationContent}
            </StyledPath>
          )}
        </svg>
      </SvgWrapper>
    </Fragment>
  );
}
ChannelIconSVG.propTypes = {
  channelIconType: PropTypes.oneOf(['primary', 'secondary', 'in-focus', 'out-of-focus']),
  channelType: PropTypes.oneOf(['voice', 'messaging', 'email', 'sms', 'workItem']),
  className: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
  animated: PropTypes.bool,
};

ChannelIconSVG.defaultProps = { channelIconType: 'secondary', channelType: 'voice', size: 25, animated: false };

export default ChannelIconSVG;
