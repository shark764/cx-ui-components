/*
 * Copyright © 2015-2021 Serenova, LLC. All rights reserved.
 */

/**
 *
 * Slider
 *
 */

import React from 'react';
import 'rc-slider/assets/index.css';
import PropTypes from 'prop-types';
import { default as RcSlider } from 'rc-slider';
import styled from 'styled-components';
import Tooltip from '../Tooltip';

const { Handle } = RcSlider;

const Wrapper = styled.div`
  display: inline-flex;
  margin-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  vertical-align: middle;
  width: 100%;
`;

const Label = styled.span`
  font-family: Arial, Helvetica;
  display: inline-table;
  font-weight: bold;
  width: 25%;
  margin-right: 40px;
  white-space: nowrap;
`;

const SubLabel = styled.span`
  color: gray;
  font-size: 13px;
`;

const RcSliderWrapper = styled(RcSlider)`
  &.rc-slider {
    pointer-events: none;
  }
  &.rc-slider-disabled {
    background-color: inherit;
  }
`

function Slider(props) {
  const {
    label,
    subLabel,
    initialValue,
    value,
    min,
    max,
    step,
    onBeforeChange,
    onChange,
    onAfterChange,
    dots,
    dotStyle,
    activeDotStyle,
    trackStyle,
    railStyle,
    disabledTrackStyle,
    tooltipText,
    tooltipProps,
    marks,
    tooltip,
    handleLabel,
    handleStyle,
    textFormatter,
    disabled
  } = props;

  const CustomHandle = props => {
    // Properties when tooltip is enabled or for custom label inside the handle dragger
    const { value, dragging, index, ...restProps } = props;
    return (
      <Handle value={value} {...restProps}>
        {tooltip && tooltipText ?
          <Tooltip content={tooltipText} tooltipProps={tooltipProps} direction="bottom">
            {handleLabel && textFormatter(value)}
          </Tooltip> : (handleLabel && textFormatter(value))}
      </Handle>
    );
  };

  const defaultHandleStyle = {
    position: 'relative',
    borderColor: disabled && value > 0 ? '#B7E3B3' : value === 0 ? '#D3D3D3' : '#4CAF50',
    height: 35,
    width: 36,
    marginLeft: 0,
    marginTop: -16,
    backgroundColor: disabled && value > 0 ? '#B7E3B3' : value === 0 ? '#D3D3D3' : '#4CAF50',
    fontSize: '12px',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: '9px',
    textAlign: 'center',
    pointerEvents: 'auto'
  }

  return (
    <Wrapper>
      {label && <Label>{label} {subLabel && <SubLabel>{subLabel}</SubLabel>}</Label>}
      <RcSliderWrapper
        defaultValue={initialValue}
        value={value}
        min={min}
        max={max}
        step={step}
        onBeforeChange={onBeforeChange}
        onChange={onChange}
        onAfterChange={onAfterChange}
        dots={dots}
        dotStyle={dotStyle}
        activeDotStyle={activeDotStyle}
        trackStyle={disabled ? disabledTrackStyle : trackStyle}
        railStyle={railStyle}
        marks={marks}
        handle={handleLabel || tooltip ? CustomHandle : undefined}
        handleStyle={!handleStyle ? defaultHandleStyle : { ...defaultHandleStyle, ...handleStyle }}
        disabled={disabled}
      />
    </Wrapper>
  );
};

Slider.propTypes = {
  label: PropTypes.string,
  subLabel: PropTypes.string,
  className: PropTypes.string,
  initialValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onBeforeChange: PropTypes.func,
  onChange: PropTypes.func,
  onAfterChange: PropTypes.func,
  dots: PropTypes.bool,
  dotStyle: PropTypes.object,
  activeDotStyle: PropTypes.object,
  trackStyle: PropTypes.object,
  railStyle: PropTypes.object,
  disabledTrackStyle: PropTypes.object,
  marks: PropTypes.object,
  tooltip: PropTypes.bool,
  tooltipText: PropTypes.string,
  tooltipProps: PropTypes.object,
  handleLabel: PropTypes.bool,
  handleStyle: PropTypes.object,
  textFormatter: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.number,
  dragging: PropTypes.bool,
  index: PropTypes.number
};

Slider.defaultProps = {
  dots: false,
  tooltip: false,
  trackStyle: { backgroundColor: '#4CAF50', height: 4 },
  disabledTrackStyle: { backgroundColor: '#B7E3B3', height: 4 },
  railStyle: { backgroundColor: '#D8D8D8', height: 4 },
  textFormatter: function textFormatter(v) {
    return v > 0 ? `${v}%` : `${v}`;
  }
}

export default Slider;
