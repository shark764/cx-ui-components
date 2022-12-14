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
const SVGStyles = css`
  fill: ${props => props.theme.primaryColor};
  ${props =>
    (props.checkListIconType === undefined || props.checkListIconType === 'primary') &&
    css`
      fill: ${props => props.theme.primaryColor};
    `};
  ${props =>
    props.checkListIconType === 'secondary' &&
    css`
      fill: rgb(153, 153, 153);
    `};
  ${props =>
    props.fillColor !== undefined &&
    css`
      fill: ${props => props.fillColor};
    `};
`;
const StyledPath = styled.path`
  ${SVGStyles};
`;

function CheckListIconSVG(props) {
  return (
    <Fragment>
      <SvgWrapper size={props.size} className={`CheckListIconSVG ${props.className}`} onClick={props.onClick}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 389.656 389.656">
          <g>
            <g>
              <StyledPath
                checkListIconType={props.checkListIconType}
                className="icon"
                d="M109.172,0L94.508,14.664c-1.124-0.637-2.389-0.983-3.68-1.008h-80c-4.418,0-8,3.582-8,8v80c0,4.418,3.582,8,8,8h80    c4.418,0,8-3.582,8-8V32.968l21.656-21.656L109.172,0z M82.828,93.656h-64v-64h60.688L50.828,58.344L40.484,48L29.172,59.312    l16,16c3.124,3.123,8.188,3.123,11.312,0l26.344-26.344V93.656z"
                fillColor={props.fillColor}
              />
            </g>
          </g>
          <g>
            <g>
              <StyledPath
                checkListIconType={props.checkListIconType}
                className="icon"
                d="M109.172,144l-14.664,14.664c-1.124-0.637-2.389-0.983-3.68-1.008h-80c-4.418,0-8,3.582-8,8v80c0,4.418,3.582,8,8,8h80    c4.418,0,8-3.582,8-8v-68.688l21.656-21.656L109.172,144z M82.828,237.656h-64v-64h60.688l-28.688,28.688L40.484,192    l-11.312,11.312l16,16c3.124,3.123,8.188,3.123,11.312,0l26.344-26.344V237.656z"
                fillColor={props.fillColor}
              />
            </g>
          </g>
          <g>
            <g>
              <StyledPath
                checkListIconType={props.checkListIconType}
                className="icon"
                d="M109.172,280l-14.664,14.664c-1.124-0.637-2.389-0.983-3.68-1.008h-80c-4.418,0-8,3.582-8,8v80c0,4.418,3.582,8,8,8h80    c4.418,0,8-3.582,8-8v-68.688l21.656-21.656L109.172,280z M82.828,373.656h-64v-64h60.688l-28.688,28.688L40.484,328    l-11.312,11.312l16,16c3.124,3.123,8.188,3.123,11.312,0l26.344-26.344V373.656z"
                fillColor={props.fillColor}
              />
            </g>
          </g>
          <g>
            <g>
              <rect x="154.828" y="77.656" width="232" height="16" />
            </g>
          </g>
          <g>
            <g>
              <rect x="154.828" y="29.656" width="232" height="16" />
            </g>
          </g>
          <g>
            <g>
              <rect x="154.828" y="221.656" width="232" height="16" />
            </g>
          </g>
          <g>
            <g>
              <rect x="154.828" y="173.656" width="232" height="16" />
            </g>
          </g>
          <g>
            <g>
              <rect x="154.828" y="357.656" width="232" height="16" />
            </g>
          </g>
          <g>
            <g>
              <rect x="154.828" y="309.656" width="232" height="16" />
            </g>
          </g>
        </svg>
      </SvgWrapper>
    </Fragment>
  );
}
CheckListIconSVG.propTypes = {
  checkListIconType: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
  fillColor: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
};

CheckListIconSVG.defaultProps = {
  checkListIconType: 'primary',
  size: 25,
};

export default CheckListIconSVG;
