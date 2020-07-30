/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import { Input } from '../StyledInputs';

const Textarea = Input.withComponent('textarea').extend`
  height: 64px;
  padding-top: 10px;
`;

export const RenderField = props => {
  const {
    input,
    label,
    labelHelpText,
    placeholder,
    id,
    className,
    componentType,
    type,
    disabled,
    onFocus,
    hideLabel,
    labelWidth,
    meta: { touched, error, warning },
  } = props;

  let inputElement;
  const inputProps = {
    id,
    className,
    'data-automation': props['data-automation'],
    placeholder,
    disabled,
    type,
    onFocus,
  };

  const textareaProps = {
    id,
    className,
    'data-automation': props['data-automation'],
    disabled,
  };

  const fieldWrapperProps = {
    input: input.name,
    label,
    labelHelpText,
    touched,
    error,
    warning,
    hideLabel,
    labelWidth,
  };

  if (componentType === 'input') {
    inputElement = <Input {...input} {...inputProps} hasError={touched && !!error} />;
  } else if (componentType === 'textarea') {
    inputElement = <Textarea {...input} {...textareaProps} hasError={touched && !!error} />;
  }
  return (
    <FieldWrapper {...fieldWrapperProps} inputName={input.name}>
      {inputElement}
    </FieldWrapper>
  );
};

const parseNumber = value => {
  if (value === '') {
    return null;
  } else {
    return parseFloat(value);
  }
};

export default function InputField(props) {

  const parseValue = value => {
    if(value !== undefined) {
      return props.maskValue ? value.replace(/^\s+/g, '').replace(/./g, '\u2022') : value.replace(/^\s+/g, '');
    } else {
      return value;
    }
  }

  if (props.dataType === 'number') {
    return <ReduxFormField {...props} component={RenderField} type="number" parse={parseNumber} />;
  } else if (props.dataType === 'password') {
    return (
      <ReduxFormField
        {...props}
        component={RenderField}
        type="password"
        parse={value => (value !== undefined ? value.replace(/^\s+/g, '') : value)}
      />
    );
  } else {
    return (
      <ReduxFormField
        {...props}
        component={RenderField}
        parse={parseValue}
      />
    );
    // The above regex prevents user from putting whitespace at the beginning of the input
    // It also prevents the user from only putting whitespace in the input
  }
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelHelpText: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  'data-automation': PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  maskValue: PropTypes.bool,
  componentType: PropTypes.oneOf(['input', 'textarea']),
  dataType: PropTypes.oneOf(['string', 'number', 'password']),
};

InputField.defaultProps = {
  disabled: false,
  componentType: 'input',
};

RenderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  labelHelpText: PropTypes.string,
  id: PropTypes.string,
  onFocus: PropTypes.func,
  hideLabel: PropTypes.bool,
  className: PropTypes.string,
  'data-automation': PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  type: PropTypes.string,
  labelWidth: PropTypes.string,
  componentType: PropTypes.oneOf(['input', 'textarea']),
};
