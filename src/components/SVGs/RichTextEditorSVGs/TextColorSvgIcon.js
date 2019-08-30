import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const SvgWrapper = styled.div`
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  margin: 6px;
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

const SvgTextColorWrapper = styled.div`
  position: absolute;
  width: 140px;
  height: 90px;
  bottom: 30px;
  right: 1px;
  z-index:1;
  background-color: white;
  ${props => props.isDisplayContentInHtml && css`pointer-events: none;`}
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
`;

const ColorBox = styled.path`
  cursor: pointer;
  :hover {
    outline: 1px solid #000;
  };
  ${props => props.isBoxChecked && css`outline: 1px solid #000;`}
`;

const ColorBoxSelectedPath = styled.path`
  stroke: ${props => {
      console.log('******************* fill color *******************', props)
      return (props.fill === 'rgb(0, 0, 0)' || props.fill === 'rgb(0, 0, 255)') ? 'red;' : 'black;'}
  }
  stroke-width: 2;
`;

const textColors = [
    'rgb(0, 0, 0)', 'rgb(102, 102, 102)', 'rgb(255, 0, 0)', 'rgb(0, 0, 255)', 'rgb(153, 0, 255)',
    'rgb(56, 118, 29)', 'rgb(255, 0, 255)', 'rgb(224, 102, 102)', 'rgb(14, 152, 241)', 'rgb(120, 63, 4)',
    'rgb(0, 255, 0)', 'rgb(0, 255, 255)', 'rgb(255, 153, 0)', 'rgb(241, 199, 14)', 'rgb(255, 255, 0)',
];

const pathsDirection = [
    // 1st row color boxes:
    {
        boxDirections: 'M10 10 v20 h20 v-20 h-20',
        highlightDirection: 'M18 25 L25 15 M18 25 L14 20'
    },
    {
        boxDirections: 'M35 10 v20 h20 v-20 h-20',
        highlightDirection: 'M43 25 L50 15 M43 25 L39 20'
    },
    {
        boxDirections: 'M60 10 v20 h20 v-20 h-20',
        highlightDirection: 'M68 25 L75 15 M68 25 L64 20'
    },
    {
        boxDirections: 'M85 10 v20 h20 v-20 h-20',
        highlightDirection: 'M93 25 L100 15 M93 25 L89 20'
    },
    {
        boxDirections: 'M110 10 v20 h20 v-20 h-20',
        highlightDirection: 'M118 25 L125 15 M118 25 L114 20'
    },
    // 2nd row color boxes:
    {
        boxDirections: 'M10 35 v20 h20 v-20 h-20',
        highlightDirection: 'M18 50 L25 40 M18 50 L14 45'
    },
    {
        boxDirections: 'M35 35 v20 h20 v-20 h-20',
        highlightDirection: 'M43 50 L50 40 M43 50 L39 45'
    },
    {
        boxDirections: 'M60 35 v20 h20 v-20 h-20',
        highlightDirection: 'M68 50 L75 40 M68 50 L64 45'
    },
    {
        boxDirections: 'M85 35 v20 h20 v-20 h-20',
        highlightDirection: 'M93 50 L100 40 M93 50 L89 45'
    },
    {
        boxDirections: 'M110 35 v20 h20 v-20 h-20',
        highlightDirection: 'M118 50 L125 40 M118 50 L114 45'
    },
    // 3rd row color boxes:
    {
        boxDirections: 'M10 60 v20 h20 v-20 h-20',
        highlightDirection: 'M18 75 L25 65 M18 75 L14 70'
    },
    {
        boxDirections: 'M35 60 v20 h20 v-20 h-20',
        highlightDirection: 'M43 75 L50 65 M43 75 L39 70'
    },
    {
        boxDirections: 'M60 60 v20 h20 v-20 h-20',
        highlightDirection: 'M68 75 L75 65 M68 75 L64 70'
    },
    {
        boxDirections: 'M85 60 v20 h20 v-20 h-20',
        highlightDirection: 'M93 75 L100 65 M93 75 L89 70'
    },
    {
        boxDirections: 'M110 60 v20 h20 v-20 h-20',
        highlightDirection: 'M118 75 L125 65 M118 75 L114 70'
    },
];

export const colorStyleMap = textColors.reduce((accumlator, currentVal) => {
    accumlator[`color-${currentVal}`] = { color: currentVal }
    return accumlator;
}, {});

export default function TextColorSvgIcon(props) {
    return (
        <SvgWrapper
            size={props.size}
            title="Text color"
            className="textColorIconSVG"
            onClick={props.onClick}
            height={props.height}
            isDisplayContentInHtml={props.isDisplayContentInHtml}
        >
            <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
                <g fill="#444">
                    <path
                        d="M 11 2 L 5 18 L 7 18 L 8.875 13 L 15.125 13 L 17 18 L 19 18 L 13 2 L 11 2 z M 12 4.6660156 L 14.375 11 L 9.625 11 L 12 4.6660156 z M 5 20 L 5 22 L 19 22 L 19 20 L 5 20 z">
                    </path>
                    <polyline points="30 10 35 18 40 10 30 10"></polyline>
                </g>
            </StyledSvg>
            {props.isColorEditorBoxOpen && (
                <SvgTextColorWrapper isDisplayContentInHtml={props.isDisplayContentInHtml}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="140px" height="90px">
                        {textColors.map((color, index) => (
                            <Fragment key={index}>
                                <ColorBox d={pathsDirection[index].boxDirections} fill={color} onMouseDown={(e) => props.onMouseDown(e, `color-${color}`)} isBoxChecked={props.toggledColor === `color-${color}`} />
                                {props.toggledColor === `color-${color}` && <ColorBoxSelectedPath d={pathsDirection[index].highlightDirection} fill={color}/>}
                            </Fragment>
                        ))}
                    </svg>
                </SvgTextColorWrapper>
            )}
        </SvgWrapper>
    )
};

TextColorSvgIcon.propTypes = {
    size: PropTypes.number,
    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    height: PropTypes.number,
    isColorEditorBoxOpen: PropTypes.bool,
    isDisplayContentInHtml: PropTypes.bool,
};

TextColorSvgIcon.defaultProps = {
    size: 30,
    height: 20,
};
