/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

/**
 *
 * RadioGroupField
 *
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 5px;
`;
const Label = styled.label`
  display: inline-block;
`;
const InputWrapper = styled.div`
  display: inline-block;
  margin-right: 4px;
`;
const HelpText = styled.div`
  font-size: x-small;
  margin-left: 17px;
`;

const parseBooleans = value => {
  if(value === 'true') {
    return true;
  } else if(value === 'false') {
    return false;
  } else {
    return value;
  }
}

const RadioGroup = ({
    input,
    label,
    disabled,
    meta: { touched, error, warning },
    options,
    required
  }) => {
    return (
      <FieldWrapper inputName={input.name} label={label} touched={touched} error={error} warning={warning}>
        {options.map(option => (
          <Wrapper key={option.value}>
            <Label>
              <InputWrapper key={option.value}>
                <input
                  type='radio'
                  {...input}
                  id={option.id}
                  className={option.className}
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                />
              </InputWrapper>
              <Fragment>
                {option.label}
                {option.helpText && (
                  <HelpText>
                    {option.helpText}
                  </HelpText>
                )}
              </Fragment>
            </Label>
          </Wrapper>
        ))}
      </FieldWrapper>
    );
};

export default function RadioGroupField(props) {
  return <ReduxFormField {...props} component={RadioGroup} parse={parseBooleans} />;
}

RadioGroupField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
      label: PropTypes.string.isRequired,
      helpText: PropTypes.string,
      id: PropTypes.string,
      className: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  required: PropTypes.bool,
};

RadioGroupField.defaultProps = {
  disabled: false,
  required: false,
};

RadioGroup.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
      label: PropTypes.string.isRequired,
      helpText: PropTypes.string,
      id: PropTypes.string,
      className: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  required: PropTypes.bool,
};
