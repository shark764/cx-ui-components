/*
 * Copyright © 2015-2021 Serenova, LLC. All rights reserved.
 */

/**
 *
 * SliderField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import Slider from '../../Slider';

const SliderComponent = props => {
  const {
    input,
    label,
    subLabel,
    labelField,
    labelHelpText,
    labelWidth,
    min,
    max,
    step,
    onBeforeChange,
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
    disabled,
    meta: { touched, error, warning },
  } = props;

  const fieldWrapperProps = {
    input: input.name,
    ...(labelField && { label: labelField }),
    ...(label && { hideLabel: true }),
    labelHelpText,
    touched,
    error,
    warning,
    labelWidth
  };

  return (
    <FieldWrapper {...fieldWrapperProps} inputName={input.name}>
      <Slider
        label={label}
        subLabel={subLabel}
        value={input.value}
        min={min}
        max={max}
        step={step}
        onBeforeChange={onBeforeChange}
        onChange={value => {
          input.onChange(value);
        }}
        onAfterChange={onAfterChange}
        dots={dots}
        dotStyle={dotStyle}
        activeDotStyle={activeDotStyle}
        trackStyle={trackStyle}
        railStyle={railStyle}
        marks={marks}
        tooltipProps={tooltipProps}
        handleLabel={handleLabel}
        handleStyle={handleStyle}
        textFormatter={textFormatter}
        disabled={disabled}
        tooltip={tooltip}
      />
    </FieldWrapper>
  );
};

export default function SliderField(props) {
  return <ReduxFormField {...props} component={SliderComponent} />;
}

SliderComponent.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  subLabel: PropTypes.string,
  labelField: PropTypes.string,
  labelHelpText: PropTypes.string,
  labelWidth: PropTypes.string,
  className: PropTypes.string,
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
  'data-automation': PropTypes.string,
  meta: PropTypes.object,
};

SliderField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  subLabel: PropTypes.string,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired,
  className: PropTypes.string,
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
};