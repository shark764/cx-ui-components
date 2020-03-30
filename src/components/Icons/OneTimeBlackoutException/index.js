import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SvgWrapper = styled.div`
    display: inline-block;
    ${props => props.size && `width: ${props.size}px;`};
`;

const StyledPath1 = styled.path`
    fill: #8383FD;
`;

const StyledPath2 = styled.path`
    fill: #FFFFFF;
`;

function OneTimeBlackoutExceptionSVG({ size }) {
    return (
        <SvgWrapper size={size}>
            <svg viewBox="0 0 40 40">
                <g id="Blackout_Recurring_Exception">
                    <StyledPath1 
                        id="Rectangle_12" 
                        d="M3,0h34c1.7,0,3,1.3,3,3v34c0,1.7-1.3,3-3,3H3c-1.7,0-3-1.3-3-3V3C0,1.3,1.3,0,3,0z"
                    />
                    <g id="Blackout_Recurring_Exception_Symbol">
                        <g id="Alarm_Clock_No_Face_-_White">
                            <g id="Alarm_Clock_No_Face_-_White-2">
                                <g id="Group_25">
                                    <StyledPath2 
                                        id="Path_43" 
                                        d="M10.8,5.1C8.2,5.4,6.1,7.2,5.3,9.6c-0.4,1.2-0.4,2.6-0.1,3.8c0.2,0.6,0.5,1.3,0.8,1.8
                                        c0.2-0.2,0.3-0.5,0.4-0.8c1.5-2.9,3.8-5.2,6.7-6.7c0.8-0.4,1.6-0.7,2.4-0.9c0.2,0,0.4-0.1,0.6-0.2c-0.3-0.3-0.7-0.6-1.1-0.8
                                        c-0.6-0.3-1.1-0.5-1.7-0.7C12.4,5,11.6,5,10.8,5.1z"
                                    />
                                    <StyledPath2 
                                        id="Path_44" 
                                        d="M27.3,5.1c-0.7,0.1-1.4,0.3-2,0.6c-0.7,0.3-1.5,1-1.5,1c0.2,0.1,0.4,0.1,0.6,0.2
                                        c1.3,0.4,2.6,1,3.8,1.8c0.9,0.6,1.7,1.2,2.5,2c1.2,1.2,2.2,2.5,2.9,4c0.1,0.2,0.2,0.4,0.3,0.6c0.4-0.6,0.6-1.2,0.8-1.8
                                        c0.7-2.7-0.3-5.5-2.5-7.1c-0.7-0.5-1.5-0.9-2.3-1.1C29.1,5,28.2,5,27.3,5.1z"
                                    />
                                    <StyledPath2 
                                        id="Path_45" 
                                        d="M18.9,8.4c-5.2,0.5-9.6,4-11.3,8.9C7.2,18.6,7,20,7,21.5c0,2.5,0.7,5,2.1,7.1
                                        c0.5,0.7,1,1.3,1.5,1.9c0.1,0.1,0.1,0.1,0.1,0.2c-0.2,0.4-0.4,0.8-0.7,1.2c-0.8,1.4-0.8,1.5-0.8,2c0,0.7,0.4,1.3,1,1.6
                                        c0.5,0.2,1.1,0.2,1.5,0c0.2-0.1,0.3-0.2,0.5-0.3c0.1-0.1,1.3-2,1.3-2.2c0.2,0,0.4,0.1,0.6,0.2c1.2,0.6,2.5,1,3.8,1.2
                                        c1.3,0.1,2.7,0.1,4,0c1.3-0.2,2.6-0.6,3.8-1.2c0.4-0.2,0.6-0.3,0.6-0.2s0.3,0.5,0.6,1c0.6,1.1,0.7,1.2,1.2,1.5
                                        c0.2,0.2,0.5,0.2,0.8,0.2c0.3,0,0.5,0,0.7-0.1c0.6-0.3,1-0.9,1-1.6c0-0.5,0-0.5-0.9-2.1c-0.3-0.5-0.6-1-0.6-1
                                        c0.1-0.2,0.3-0.3,0.4-0.5c2.9-3.2,4-7.7,3-11.9c-0.2-0.9-0.5-1.8-0.9-2.6c-1.3-2.7-3.4-4.8-6.1-6.1c-1.4-0.7-3-1.1-4.6-1.3
                                        C20.3,8.3,19.6,8.3,18.9,8.4z M21.5,11.1c3.8,0.6,7.1,3.2,8.3,6.9c0.4,1.1,0.6,2.2,0.5,3.4c0,0.7,0,1.4-0.1,2.1
                                        c-0.6,2.7-2.1,5.1-4.4,6.6c-4.2,2.8-9.7,2.2-13.2-1.4c-1.6-1.6-2.6-3.7-2.9-6c-0.1-1.1-0.1-2.2,0.1-3.3
                                        c0.5-2.5,1.9-4.7,3.9-6.2C15.9,11.4,18.7,10.7,21.5,11.1L21.5,11.1z"
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </SvgWrapper>
    )
};

OneTimeBlackoutExceptionSVG.propTypes = {
    size: PropTypes.number
}

OneTimeBlackoutExceptionSVG.defaultProps = {
    size: 25
}

export default OneTimeBlackoutExceptionSVG;

