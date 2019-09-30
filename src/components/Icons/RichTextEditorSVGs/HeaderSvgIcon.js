import React, { Fragment } from 'react';
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

const HeaderOneSvg = styled.svg`
  position: relative;
  top: 2px;
  left: 4px;
`;

const HeaderTwoSvg = styled.svg`
  position: relative;
  top: 1px;
  left: 4px;
`;

const HeaderThreeSvg = styled.svg`
  position: relative;
  left: 4px;
`;

const StyledPath = styled.path`
  fill: #444;
`;
export default function HeaderSvgIcon(props) {
    return (
        <Fragment>
            <SvgWrapper
                size={props.size}
                title="Header one"
                className="HeaderOneSvgIcon"
                height={props.height}
                active={props.blockType === 'header-one'}
                isDisplayContentInHtml={props.isDisplayContentInHtml}
                onMouseDown={(e) => props.onMouseDown(e, 'header-one')}
            >
                <HeaderOneSvg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 45 45">
                    <StyledPath
                        d="M 2 4 L 2 20 L 5 20 L 5 13 L 11 13 L 11 20 L 14 20 L 14 4 L 11 4 L 11 10 L 5 10 L 5 4 L 2 4 z M 21.65625 4 L 16 6.1152344 L 16 8.7402344 L 19 7.7851562 L 19 20 L 22 20 L 22 4 L 21.65625 4 z">
                    </StyledPath>
                </HeaderOneSvg>
            </SvgWrapper>
            <SvgWrapper
                size={props.size}
                title="Header two"
                className="HeaderTwoSvgIcon"
                height={props.height}
                active={props.blockType === 'header-two'}
                isDisplayContentInHtml={props.isDisplayContentInHtml}
                onMouseDown={(e) => props.onMouseDown(e, 'header-two')}
            >
                <HeaderTwoSvg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40">
                    <StyledPath
                        d="M 1 5 L 1 19 L 4 19 L 4 13 L 8 13 L 8 19 L 11 19 L 11 5 L 8 5 L 8 10 L 4 10 L 4 5 L 1 5 z M 17.919922 5 C 16.991922 5 16.150437 5.2034219 15.398438 5.6074219 C 14.646437 6.0114219 14.057766 6.5720625 13.634766 7.2890625 C 13.211766 8.0060625 13 8.7877656 13 9.6347656 L 13 10 L 16 10 L 16.058594 9.4902344 C 16.058594 8.0002344 17.06275 7.4648438 17.84375 7.4648438 C 19.46875 7.4648438 19.59375 8.6892031 19.59375 9.2832031 C 19.59375 10.016203 18.813703 11.006953 17.720703 12.251953 L 13 16.914062 L 13 19 L 23 19 L 23 16.535156 L 17.482422 16.535156 C 17.482422 16.535156 20.899172 12.774984 21.326172 12.208984 C 21.752172 11.642984 22.067531 11.102891 22.269531 10.587891 C 22.471531 10.072891 22.572266 9.543 22.572266 9 C 22.572266 7.711 22.168281 6.7222031 21.363281 6.0332031 C 20.558281 5.3442031 19.410922 5 17.919922 5 z">
                    </StyledPath>
                </HeaderTwoSvg>
            </SvgWrapper>
            <SvgWrapper
                size={props.size}
                title="Header three"
                active={props.active}
                className="HeaderThreeSvgIcon"
                height={props.height}
                active={props.blockType === 'header-three'}
                isDisplayContentInHtml={props.isDisplayContentInHtml}
                onMouseDown={(e) => props.onMouseDown(e, 'header-three')}
            >
                <HeaderThreeSvg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 35 35"
                >
                    <StyledPath
                        d="M 2 6 L 2 18 L 5 18 L 5 13 L 9 13 L 9 18 L 12 18 L 12 6 L 9 6 L 9 10 L 5 10 L 5 6 L 2 6 z M 17.898438 6 C 17.898438 6 14 5.9991094 14 9.5371094 L 14 10 L 16.75 10 C 16.75 10 16.687 8.875 18 8.875 C 19.188 8.875 19.1875 10 19.1875 10 C 19.1875 10.662 18.602 11 18 11 L 17 11 L 17 12 L 17 13 L 18 13 C 18.602 13 19.1875 13.338 19.1875 14 C 19.1875 14 19.219 15.1875 18 15.1875 C 16.75 15.1875 16.75 14 16.75 14 L 14 14 L 14 14.462891 C 14 18.000891 17.898438 18 17.898438 18 C 17.898438 18 22 18.000937 22 14.460938 C 22 13.000937 21.247 12.209 21 12 C 21.247 11.791 22 10.999063 22 9.5390625 C 22 5.9990625 17.898438 6 17.898438 6 z">
                    </StyledPath>
                </HeaderThreeSvg>
            </SvgWrapper>
        </Fragment>
    )
};

HeaderSvgIcon.propTypes = {
    size: PropTypes.number,
    bockType: PropTypes.string,
    onMouseDown: PropTypes.func,
    height: PropTypes.number,
    isDisplayContentInHtml: PropTypes.bool,
};

HeaderSvgIcon.defaultProps = {
    size: 30,
    height: 20
};
