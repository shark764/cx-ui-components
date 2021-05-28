/*
 * Copyright © 2015-2021 Serenova, LLC. All rights reserved.
 */

/**
 *
 * CapacityRuleSliderField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import Slider from '../../Slider';
import MaxChannelDropdown from '../../MaxChannelDropdown';
import { capitalizeFirstLetter } from 'serenova-js-utils/strings';
import styled from 'styled-components';

const FieldWrapperStyled = styled.div`
   display:flex;
   align-items: baseline;
   flex-wrap: nowrap;
   width: 100%;
   padding-top: 7px;
 `

const Label = styled.label`
   color: red;
   margin-left: 25px;
   margin-top: 10px;
 `

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
 `;

const MaxChannelDropdownWrapper = styled(MaxChannelDropdown)`
   margin-left: 15px;
   width: 30%;
 `
const SliderWrapper = styled(Slider)`
   width: 70%;
 `

class CapacityRuleSliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalWeight: 0
    };
  }

  handleMaxValueOnChange = (newValue, index) => this.props.input.onChange(
    this.props.input.value
      .setIn([index, 'max'], newValue)
  )

  // CC-79: REQ-2e & REQ-2f
  handleMaxChannelValue(rule, originalWeight, channelName, index) {
    // New weight value set after slider onChange method && originalWeight param set onBeforeChange for comparison reasons
    const newWeightValue = rule.get('weight');

    // Dropdown originalUpperLimit and updated newUpperLimit
    const originalUpperLimit = originalWeight > 0 ? parseInt(Math.floor(100 / originalWeight), 10) : 0;
    const newUpperLimit = newWeightValue > 0 ? parseInt(Math.floor(100 / newWeightValue), 10) : 0;

    // Original max value
    const originalMaxValue = rule.get('max');

    if (channelName === 'Voice') {
      newWeightValue > 0 ? this.handleMaxValueOnChange(1, index) : this.handleMaxValueOnChange(0, index);
    } else {
      if (newWeightValue > 0 && newWeightValue <= 50) {
        if (originalMaxValue === originalUpperLimit) {
          this.handleMaxValueOnChange(newUpperLimit, index);
        } else if (originalMaxValue < originalUpperLimit) {
          if (originalMaxValue >= newUpperLimit) {
            this.handleMaxValueOnChange(newUpperLimit, index);
          } else {
            this.handleMaxValueOnChange(originalMaxValue, index);
          }
        }
      } else if (newWeightValue > 50) {
        this.handleMaxValueOnChange(1, index);
      } else {
        this.handleMaxValueOnChange(0, index);
      }
    }

  }

  render() {
    const {
      props: {
        meta: {
          error
        },
        input: {
          value,
          name,
          onChange
        },
        min,
        max,
        step,
        handleLabel,
        textFormatter,
        disabled,
        tooltip,
        sliderTooltip,
        sliderTooltips,
        sliderTooltipProps,
        maxChannelDropdownTooltip,
        maxChannelDropdownTooltips,
        maxChannelDropdownTooltipProps,
      },
      state: {
        originalWeight
      }
    } = this;

    const fieldWrapperProps = {
      input: name,
      ...(this.props.labelField && { label: this.props.labelField }),
      ...(this.props.label && { hideLabel: true }),
      labelWidth: '0px'
    };

    return (
      <Wrapper>
        {this.props.input.value && this.props.input.value.size > 0 && this.props.input.value.map((rule, index) => {
          const channelMax = rule.get('max');
          const channelWeight = rule.get('weight');
          const channelName = capitalizeFirstLetter(rule.get('channels').get(0));
          return (
            <FieldWrapper
              {...fieldWrapperProps}
              inputName={name}
              label={''}
              key={index.toString()}
            >
              <FieldWrapperStyled>
                <SliderWrapper
                  label={channelName}
                  value={channelWeight}
                  min={min}
                  max={max}
                  step={step}
                  // Saving selected weight in state before changing it
                  onBeforeChange={() => this.setState({ originalWeight: channelWeight })}
                  onChange={(sliderValue) => onChange(
                    value
                      .setIn([index, 'weight'], sliderValue > 4 ? sliderValue : 0)
                  )}
                  // Updating calculated max value of dropdown in state after moving the slider
                  onAfterChange={() => this.handleMaxChannelValue(rule, originalWeight, channelName, index)}
                  handleLabel={handleLabel}
                  disabled={disabled}
                  tooltip={tooltip}
                  tooltipText={sliderTooltip || (sliderTooltips && sliderTooltips[index])}
                  tooltipProps={sliderTooltipProps}
                  handleStyle={{ zIndex: (value.size + 100) - index }}
                />
                <MaxChannelDropdownWrapper
                  weight={channelName === 'Voice' ? (channelWeight === 0 ? 0 : 100) : channelWeight}
                  onChange={(e) => this.handleMaxValueOnChange(parseInt(e.target.value, 10), index)}
                  tooltip={tooltip}
                  tooltipText={maxChannelDropdownTooltip || (maxChannelDropdownTooltips && maxChannelDropdownTooltips[index])}
                  tooltipProps={maxChannelDropdownTooltipProps}
                  dropdownValue={channelMax}
                  disabled={(channelWeight > 4 && channelName === 'Voice') || disabled}
                />
              </FieldWrapperStyled>
            </FieldWrapper>
          )
        }
        )}
        <Label>{error && error[0] && error[0].message}</Label>
      </Wrapper>
    );
  }
};

export default function CapacityRuleSliderField(props) {
  return <ReduxFormField {...props} component={CapacityRuleSliderComponent} />;
}

CapacityRuleSliderComponent.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  labelField: PropTypes.string,
  labelHelpText: PropTypes.string,
  labelWidth: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  handleLabel: PropTypes.bool,
  textFormatter: PropTypes.func,
  disabled: PropTypes.bool,
  'data-automation': PropTypes.string,
  meta: PropTypes.object,
  tooltip: PropTypes.bool,
  sliderTooltip: PropTypes.string,
  sliderTooltips: PropTypes.array,
  sliderTooltipProps: PropTypes.object,
  maxChannelDropdownTooltip: PropTypes.string,
  maxChannelDropdownTooltips: PropTypes.array,
  maxChannelDropdownTooltipProps: PropTypes.object
};

CapacityRuleSliderField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  handleLabel: PropTypes.bool,
  textFormatter: PropTypes.func,
  sliderTooltip: PropTypes.string,
  sliderTooltips: PropTypes.array,
  sliderTooltipProps: PropTypes.object,
  maxChannelDropdownTooltips: PropTypes.array,
  maxChannelDropdownTooltipProps: PropTypes.object
};