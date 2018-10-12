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
  id,
  className,
  componentType,
  type,
  disabled,
  meta: { touched, error, warning },
}) => {
  let inputElement;
  if (componentType === 'input') {
    inputElement = (
      <Input
        {...input}
        id={id}
        className={className}
        disabled={disabled}
        type={type}
        hasError={touched && !!error}
      />
    );
  } else if (componentType === 'textarea') {
    inputElement = (
      <Textarea {...input} id={id} className={className} disabled={disabled} hasError={touched && !!error} />
    );
  }
  return (
    <FieldWrapper inputName={input.name} label={label} labelHelpText={labelHelpText} touched={touched} error={error} warning={warning}>
      {inputElement}
    </FieldWrapper>
  );
};

const parseNumber = (value) => {
  if (value === '') {
    return null;
  } else {
    return parseFloat(value);
  }
};

export default function InputField(props) {
  if (props.dataType === 'number') {
    return <ReduxFormField {...props} component={RenderField} type="number" parse={parseNumber} />;
  } else {
    return <ReduxFormField {...props} component={RenderField} parse={(value) => value !== undefined ? value.replace(/^\s+/g, '') : value} />;
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
  disabled: PropTypes.bool,
  componentType: PropTypes.oneOf(['input', 'textarea']),
  dataType: PropTypes.oneOf(['string', 'number']),
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
  className: PropTypes.string,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  type: PropTypes.string,
  componentType: PropTypes.oneOf(['input', 'textarea']),
};
