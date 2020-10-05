import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SvgWrapper = styled.div`
  display: inline-block;
  ${props => props.size && `width: ${props.size}px;`};
`;
const StyledPath = styled.path`
  fill: ${props => props.color || 'black'}
`;

export default function UserIconSVG(props){
    return(
        <SvgWrapper
            size={props.size}
            className={`UserIconSVG ${props.className}`}
            data-automation='userIcon'
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <StyledPath color={props.color} d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></StyledPath>
            </svg>
        </SvgWrapper>
    )
}

UserIconSVG.propTypes = {
    /**
     * Size in pixels , based on width of icons container
     */
      size: PropTypes.number,
      className: PropTypes.string,
      'data-automation': PropTypes.string,
      /** Icon color, can be a RGB, HEX, or keyword. If color is not specified, it will fallback to the primary color.*/
      color: PropTypes.string
};
UserIconSVG.defaultProps = {
      size: 25,
};