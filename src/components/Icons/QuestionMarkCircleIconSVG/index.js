import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  &:hover > svg > .icon {
    fill: darken(0.30, ${props => props.theme.primaryColor});
  }
  ${props => props.size && `width: ${props.size}px;`};
  ${props => props.disabled && css`cursor: not-allowed;`}
`;
const StyledPath = styled.path`
  fill: ${props => props.theme.primaryColor};
  ${props => (props.questionmarkcircleIconType === undefined || props.questionmarkcircleIconType === 'primary') &&
    css`fill: ${props => props.theme.primaryColor};`}
  ${props => props.questionmarkcircleIconType === 'secondary' &&
    css`fill: rgb(153, 153, 153);`};
`;

function QuestionMarkCircleIconSVG(props) {
  return (
    <Fragment>
      <SvgWrapper
        size={props.size}
        className="QuestionMarkCircleIconSVG"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <svg viewBox="0 0 24 24">
          <StyledPath
            className="icon"
            questionmarkcircleIconType={props.questionmarkcircleIconType}
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 17h-2v-2h2v2zm2.067-7.746l-.895.918C13.448 12.895 13 13.5 13 15h-2v-.5c0-1.104.448-2.104 1.171-2.828l1.243-1.258A2 2 0 1 0 10 9H8a4 4 0 0 1 8 0c0 .88-.357 1.677-.933 2.254z"
          />
        </svg>
      </SvgWrapper>
    </Fragment>
  );
}
QuestionMarkCircleIconSVG.propTypes = {
  size: PropTypes.number,
  questionmarkcircleIconType: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

QuestionMarkCircleIconSVG.defaultProps = {
  size: 25
};

export default QuestionMarkCircleIconSVG;
