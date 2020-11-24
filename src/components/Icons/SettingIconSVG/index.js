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

function SettingIconSVG(props) {
  return (
    <Fragment>
      <SvgWrapper
        size={props.size}
        className="SettingIconSVG"
        onClick={props.onClick}
        disabled={props.disabled}
        hoverColor={props.hoverColor}
      >
        <svg viewBox="340 140 280 279.416">
          <StyledPath
            className="icon"
            settingIconType={props.settingIconType}
            color={props.color}
            d="M620,305.666v-51.333l-31.5-5.25c-2.333-8.75-5.833-16.917-9.917-23.917L597.25,199.5l-36.167-36.75l-26.25,18.083  c-7.583-4.083-15.75-7.583-23.916-9.917L505.667,140h-51.334l-5.25,31.5c-8.75,2.333-16.333,5.833-23.916,9.916L399.5,163.333  L362.75,199.5l18.667,25.666c-4.083,7.584-7.583,15.75-9.917,24.5l-31.5,4.667v51.333l31.5,5.25  c2.333,8.75,5.833,16.334,9.917,23.917l-18.667,26.25l36.167,36.167l26.25-18.667c7.583,4.083,15.75,7.583,24.5,9.917l5.25,30.916  h51.333l5.25-31.5c8.167-2.333,16.333-5.833,23.917-9.916l26.25,18.666l36.166-36.166l-18.666-26.25  c4.083-7.584,7.583-15.167,9.916-23.917L620,305.666z M480,333.666c-29.75,0-53.667-23.916-53.667-53.666s24.5-53.667,53.667-53.667  S533.667,250.25,533.667,280S509.75,333.666,480,333.666z"
          />
        </svg>
      </SvgWrapper>
    </Fragment>
  );
}
SettingIconSVG.propTypes = {
  size: PropTypes.number,
  settingIconType: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  hoverColor: PropTypes.string
};

SettingIconSVG.defaultProps = {
  size: 23
};

export default SettingIconSVG;
