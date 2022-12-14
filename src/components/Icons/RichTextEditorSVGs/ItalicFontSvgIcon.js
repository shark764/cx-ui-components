import React from 'react';
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
  top: 3px;
  left: 3px;
`;

const StyledPath = styled.path`
  fill: #444;
`;

export default function ItalicFontSvgIcon(props) {
    return (
        <SvgWrapper
            size={props.size}
            active={props.active}
            title="Italic (Ctrl-I)"
            className="italicIconSVG"
            height={props.height}
            onMouseDown={props.onMouseDown}
            isDisplayContentInHtml={props.isDisplayContentInHtml}
        >
            <StyledSvg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
            >
                <StyledPath
                    d="M 16.398438 24 L 4.199219 24 L 4.699219 22.101563 C 5 22.101563 5.5 22 6 22 C 6.601563 22 6.898438 21.898438 7.199219 21.800781 C 7.601563 21.601563 7.898438 21.398438 8.101563 21.199219 C 8.300781 20.898438 8.5 20.601563 8.601563 20.199219 L 12.199219 6.101563 C 12.300781 5.699219 12.300781 5.398438 12.199219 5.199219 C 12.101563 4.898438 11.898438 4.699219 11.601563 4.5 C 11.398438 4.398438 11 4.300781 10.601563 4.199219 C 10.101563 4.101563 9.601563 4 9.300781 4 L 9.800781 2 L 22 2 L 21.5 4 C 21.199219 4 20.398438 4.101563 19.898438 4.101563 C 19.398438 4.199219 19 4.199219 18.699219 4.300781 C 18.300781 4.398438 17.898438 4.601563 17.699219 4.898438 C 17.5 5.199219 17.300781 5.5 17.300781 5.898438 L 13.699219 20 C 13.601563 20.398438 13.601563 20.699219 13.699219 21 C 13.800781 21.300781 14 21.5 14.300781 21.601563 C 14.5 21.699219 14.800781 21.800781 15.300781 21.898438 C 15.800781 22 16.601563 22 16.898438 22.101563 Z ">
                </StyledPath>
            </StyledSvg>
        </SvgWrapper>
    )
};

ItalicFontSvgIcon.propTypes = {
    size: PropTypes.number,
    active: PropTypes.bool,
    onMouseDown: PropTypes.func,
    height: PropTypes.number,
    isDisplayContentInHtml: PropTypes.bool,
};

ItalicFontSvgIcon.defaultProps = {
    size: 20,
    height: 20,
};
