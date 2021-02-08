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
import { default as RcSlider, SliderTooltip } from 'rc-slider';
import styled from 'styled-components';

const { Handle } = RcSlider;

const Wrapper = styled.div`
  display: inline-flex;
  width: 100%;
  margin-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  vertical-align: middle;

`;

const Label = styled.span`
  display: inline-table;
  width: 30%;
`;

const SubLabel = styled.span`
  color: gray;
  font-size: 13px;
`;

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
    marks,
    tooltip,
    tooltipProps,
    handleLabel,
    handleStyle,
    textFormatter,
    disabled
  } = props;

  const CustomHandle = props => {
    // Properties when tooltip is enabled or for custom label inside the handle dragger
    const { value, dragging, index, ...restProps } = props;
    const { visible, placement, prefixCls, overlay } = tooltipProps || {};
    return (
      <SliderTooltip
        prefixCls={prefixCls || "rc-slider-tooltip"}
        overlay={overlay || `${value} %`}
        visible={tooltip && (visible || dragging)}
        placement={tooltip && (placement || 'top')}
        key={index}
      >
        <Handle value={value} {...restProps} >
          {handleLabel && textFormatter(value)}
        </Handle>
      </SliderTooltip>
    );
  };

  return (
    <Wrapper className={props.className}>
      {label && <Label>{label} {subLabel && <SubLabel>{subLabel}</SubLabel>}</Label>}
      <RcSlider
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
        trackStyle={trackStyle}
        railStyle={railStyle}
        marks={marks}
        handle={handleLabel || tooltip ? CustomHandle : undefined}
        handleStyle={handleStyle}
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
  marks: PropTypes.object,
  tooltip: PropTypes.bool,
  tooltipProps: PropTypes.object,
  handleLabel: PropTypes.bool,
  handleStyle: PropTypes.object,
  textFormatter: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  dragging: PropTypes.bool,
  index: PropTypes.number
};

Slider.defaultProps = {
  dots: false,
  tooltip: false,
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
