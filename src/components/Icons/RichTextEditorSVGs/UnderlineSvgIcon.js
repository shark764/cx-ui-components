import React  from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  margin: 6px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  ${props => props.size && css`width: ${props.size}px;`}
  ${props => props.height && css`height: ${props.height}px;`}
  ${props => props.active && css`background-color: rgba(32,33,36,0.122);`}
  :hover {
    ${props => !props.active && css`background-color: rgba(0, 0, 0, 0.07);`}
  };
  ${props => props.isDisplayContentInHtml && css`pointer-events: none;`}
`;

const StyledSvg = styled.svg`
  position: relative;
  top: 2px;
`;

const StyledPath = styled.path`
  fill: #444;
`;

export default function UnderlineSvgSIcon(props) {
    return (
        <SvgWrapper
            size={props.size}
            active={props.active}
            title="Underline (Ctrl-U)"
            className="underlineIconSVG"
            height={props.height}
            onMouseDown={props.onMouseDown}
            isDisplayContentInHtml={props.isDisplayContentInHtml}
        >
            <StyledSvg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
            >
                <StyledPath
                    d="M 6 3 L 6 12.875 C 6 13.902344 6.164063 14.800781 6.5 15.5625 C 6.835938 16.320313 7.324219 16.953125 7.9375 17.46875 C 8.550781 17.984375 9.265625 18.371094 10.125 18.625 C 10.984375 18.878906 11.949219 19 13 19 C 14.050781 19 15.015625 18.878906 15.875 18.625 C 16.734375 18.371094 17.449219 17.984375 18.0625 17.46875 C 18.675781 16.953125 19.164063 16.320313 19.5 15.5625 C 19.835938 14.804688 20 13.902344 20 12.875 L 20 3 L 17 3 L 17 11.96875 C 17 12.503906 16.992188 13.042969 16.9375 13.59375 C 16.882813 14.144531 16.699219 14.65625 16.4375 15.09375 C 16.175781 15.53125 15.785156 15.875 15.25 16.15625 C 14.714844 16.4375 13.972656 16.59375 13 16.59375 C 12.027344 16.59375 11.285156 16.4375 10.75 16.15625 C 10.21875 15.875 9.824219 15.53125 9.5625 15.09375 C 9.300781 14.65625 9.117188 14.144531 9.0625 13.59375 C 9.007813 13.042969 9 12.503906 9 11.96875 L 9 3 Z M 6 21 L 6 23 L 20 23 L 20 21 Z ">
                </StyledPath>
            </StyledSvg>
        </SvgWrapper>
    );
};

UnderlineSvgSIcon.propTypes = {
    size: PropTypes.number,
    active: PropTypes.bool,
    onMouseDown: PropTypes.func,
    height: PropTypes.number,
    isDisplayContentInHtml: PropTypes.bool,
};

UnderlineSvgSIcon.defaultProps = {
    size: 20,
    height: 20,
};