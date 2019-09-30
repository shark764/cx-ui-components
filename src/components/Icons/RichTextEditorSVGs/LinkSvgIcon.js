import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  margin: 6px;
  border-radius: 5px;
  cursor: pointer;
  margin: 6px 6px;
  display: inline-block;
  ${props => props.size && css`width: ${props.size}px;`}
  ${props => props.height && css`height: ${props.height}px;`}
  ${props => props.active && css`background-color: rgba(32,33,36,0.122);`}
  :hover {
    ${props => !props.active && css`background-color: rgba(0, 0, 0, 0.07);`}
  };
  ${props => props.isDisplayContentInHtml && css`pointer-events: none;`}
`;
const StyledPath = styled.path`
  fill: #444;
`;

export default function LinkSvgIcon(props) {
    return (
        <SvgWrapper
            size={props.size}
            active={props.active}
            className="linkIconSVG"
            height={props.height}
            onMouseDown={props.onMouseDown}
            isDisplayContentInHtml={props.isDisplayContentInHtml}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <StyledPath
                    d="M 6 7 C 3.239 7 1 9.239 1 12 C 1 14.761 3.239 17 6 17 L 10 17 L 10 15 L 6 15 C 4.343 15 3 13.657 3 12 C 3 10.343 4.343 9 6 9 L 10 9 L 10 7 L 6 7 z M 14 7 L 14 9 L 18 9 C 19.657 9 21 10.343 21 12 C 21 13.657 19.657 15 18 15 L 14 15 L 14 17 L 18 17 C 20.761 17 23 14.761 23 12 C 23 9.239 20.761 7 18 7 L 14 7 z M 7 11 L 7 13 L 17 13 L 17 11 L 7 11 z">
                </StyledPath>
            </svg>
        </SvgWrapper>
    )
};

LinkSvgIcon.propTypes = {
    size: PropTypes.number,
    active: PropTypes.bool,
    onMouseDown: PropTypes.func,
    height: PropTypes.number,
    isDisplayContentInHtml: PropTypes.bool,
};

LinkSvgIcon.defaultProps = {
    size: 30,
    height: 30,
};
