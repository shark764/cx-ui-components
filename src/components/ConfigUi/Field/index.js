/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * Field
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import styled from 'styled-components';

const FieldWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-left: 10px;
  padding-right: 10px;
  font-size: 14px;
`;

const Label = styled.label`
  display: inline-block;
  width: 150px;
  margin-top: 5px;
`;

const InputWrapper = styled.div`
  flex-grow: 1;
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  font-size: 13px;
  border: 1px solid;
  border-color: ${props => (props.hasError ? 'red' : 'transparent')};
  background-color: ${props => (props.disabled ? '#efefef' : 'inherit')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'text')};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset,
    0 -1px 0 rgba(0, 0, 0, 0.05) inset;

  &::placeholder {
    color: #cccccc;
  }

  &:focus {
    outline: 0;
    border-color: #3498db;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }
`;

const Textarea = Input.withComponent('textarea').extend`
  height: 64px;
  padding-top: 10px;
`;

const Select = Input.withComponent('select');

const Error = styled.span`
  color: red;
`;

const Warning = styled.span`
  color: orange;
`;

const RenderField = ({
  input,
  dataType,
  label,
  componentType,
  type,
  options,
  disabled,
  meta: { touched, error, warning },
}) => {
  let inputElement;
  if (componentType === 'input') {
    inputElement = (
      <Input
        {...input}
        disabled={disabled}
        type={type}
        hasError={touched && !!error}
      />
    );
  } else if (componentType === 'textarea') {
    inputElement = (
      <Textarea {...input} disabled={disabled} hasError={touched && !!error} />
    );
  } else if (componentType === 'select') {
    if (dataType === 'boolean' && !options) {
      options = [
        {label : 'True', value: true},
        {label : 'False', value: false}
      ];
    }
    inputElement = (
      <Select {...input} disabled={disabled} hasError={touched && !!error}>
        {options ? (
          <Fragment>
            <option />
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Fragment>
        ) : (
          <option>Loading...</option>
        )}
      </Select>
    );
  }
  return (
    <FieldWrapper>
      <Label htmlFor={input.name}>{label}</Label>
      <InputWrapper>
        {inputElement}
        {touched &&
          ((error && <Error>{error}</Error>) ||
            (warning && <Warning>{warning}</Warning>))}
      </InputWrapper>
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

const parseBoolean = (value) => {
  if (value !== undefined && value === '') {
    return null;
  } else if(value !== undefined && value !== '') {
    return value === 'true';
  } else {
    return undefined;
  }
}

export default function Field(props) {
  if (props.dataType === 'number') {
    return <ReduxFormField {...props} component={RenderField} type="number" parse={parseNumber} />;
  } else if (props.dataType === 'boolean') {
    return <ReduxFormField {...props} component={RenderField} parse={parseBoolean} />;
  } else {
    return <ReduxFormField {...props} component={RenderField} parse={(value) => value.replace(/^\s+/g, '')} />;
    // The above regex prevents user from putting whitespace at the beginning of the input
    // It also prevents the user from only putting whitespace in the input
  }
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  componentType: PropTypes.oneOf(['input', 'textarea', 'select']),
  dataType: PropTypes.oneOf(['string', 'number', 'boolean']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
      label: PropTypes.string,
    })
  ),
  disabled: PropTypes.bool,
};

RenderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  componentType: PropTypes.oneOf(['input', 'textarea', 'select']),
  dataType: PropTypes.oneOf(['string', 'number', 'boolean']),
  type: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
      label: PropTypes.string,
    })
  ),
  disabled: PropTypes.bool,
  meta: PropTypes.object,
};

Field.defaultProps = {
  componentType: 'input',
};
