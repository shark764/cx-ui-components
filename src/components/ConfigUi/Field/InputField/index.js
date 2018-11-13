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

const RenderField = ({
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
  meta: { touched, error, warning }
}) => {
  let inputElement;
  const inputProps = {
    id,
    className,
    placeholder,
    disabled,
    type,
    onFocus
  };
  const textareaProps = { id, className, disabled };
  const fieldWrapperProps = {
    input: input.name,
    label,
    labelHelpText,
    touched,
    error,
    warning
  };

  if (componentType === 'input') {
    inputElement = (
      <Input {...input} {...inputProps} hasError={touched && !!error} />
    );
  } else if (componentType === 'textarea') {
    inputElement = (
      <Textarea {...input} {...textareaProps} hasError={touched && !!error} />
    );
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
  if (props.dataType === 'number') {
    return (
      <ReduxFormField
        {...props}
        component={RenderField}
        type="number"
        parse={parseNumber}
      />
    );
  } else {
    return (
      <ReduxFormField
        {...props}
        component={RenderField}
        parse={value =>
          value !== undefined ? value.replace(/^\s+/g, '') : value
        }
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
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  componentType: PropTypes.oneOf(['input', 'textarea']),
  dataType: PropTypes.oneOf(['string', 'number'])
};

InputField.defaultProps = {
  disabled: false,
  componentType: 'input'
};

RenderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  labelHelpText: PropTypes.string,
  id: PropTypes.string,
  onFocus: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  type: PropTypes.string,
  componentType: PropTypes.oneOf(['input', 'textarea'])
};
