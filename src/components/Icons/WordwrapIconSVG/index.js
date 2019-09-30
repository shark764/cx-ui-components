import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  display: inline-block;
  ${props => props.size && `width: ${props.size}px;`};
`;
const StyledPath = styled.path`
  ${props =>
    props.wordWrapIconType === 'primary' &&
    css`
      fill: ${props => props.theme.primaryColor};
    `} 
  ${props =>
    props.wordWrapIconType === 'wordWrapOn' &&
    css`
      fill: rgb(232, 137, 12);
    `};
`;

function WordWrapIconSVG(props) {
  return (
    <SvgWrapper
      size={props.size}
      className={props.className}
      onClick={props.onClick}
      wordWrapIconType={props.wordWrapIconType}
    >
      <svg viewBox="0 0 24 24">
        <StyledPath
          wordwrapIconType={props.wordWrapIconType}
          d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 18 13 C 19.116666 13 20 13.883334 20 15 C 20 16.116666 19.116666 17 18 17 L 15.541016 17 L 15.541016 15.591797 C 15.541016 15.064797 14.90325 14.801828 14.53125 15.173828 L 12.207031 17.498047 C 11.930031 17.775047 11.930031 18.224953 12.207031 18.501953 L 14.53125 20.826172 C 14.90425 21.198172 15.542016 20.93325 15.541016 20.40625 L 15.541016 19 L 18 19 C 19.843594 19 21.340521 17.706363 21.796875 16 L 22 16 L 22 15 C 22 12.802666 20.197334 11 18 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 9 19 A 1.0001 1.0001 0 1 0 9 17 L 3 17 z"/>
        </svg>
    </SvgWrapper>
  );
}
WordWrapIconSVG.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  wordWrapIconType: PropTypes.oneOf(['primary', 'wordWrapOn' ]),
  onClick: PropTypes.func,
};

export default WordWrapIconSVG;
