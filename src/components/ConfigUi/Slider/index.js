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
import { default as RcSlider, createSliderWithTooltip } from 'rc-slider';

const { Handle } = RcSlider;

function Slider(props) {
  const {
    initialValue,
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
    marks,
    tooltip,
    tooltipProps,
    handleLabel,
    handleStyle,
    textFormatter,
    disabled
  } = props;

  const SliderWithTooltip = tooltip ? createSliderWithTooltip(RcSlider) : RcSlider;

  const CustomHandle = props => {
    const { value, ...restProps } = props;
    return (
      <Handle value={value} {...restProps} >
        {handleLabel && textFormatter(value)}
      </Handle>
    );
  };

  return (
      <SliderWithTooltip
        defaultValue={initialValue}
        min={min}
        max={max}
        step={step}
        onBeforeChange={onBeforeChange}
        onChange={onChange}
        onAfterChange={onAfterChange}
        dots={dots}
        dotStyle={dotStyle}
        activeDotStyle={activeDotStyle}
        trackStyle={trackStyle}
        railStyle={railStyle}
        marks={marks}
        tipProps={tooltipProps}
        handle={handleLabel ? CustomHandle : undefined}
        handleStyle={handleStyle}
        tipFormatter={textFormatter}
        disabled={disabled}
      />
  );
};

Slider.propTypes = {
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
  marks: PropTypes.object,
  tooltip: PropTypes.bool,
  tooltipProps: PropTypes.object,
  handleLabel: PropTypes.bool,
  handleStyle: PropTypes.object,
  textFormatter: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string
};

Slider.defaultProps = {
  dots: false,
  tooltip: false,
  initialValue: 0,
  handleStyle: {
    borderColor: '#04B45F',
    height: 35,
    width: 36,
    marginLeft: 0,
    marginTop: -16,
    backgroundColor: '#04B45F',
    fontSize: '12px',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: '9px',
    textAlign: 'center'
  },
  trackStyle: { backgroundColor: '#04B45F', height: 4 },
  railStyle: { backgroundColor: '#D8D8D8', height: 4 }
}

export default Slider;
