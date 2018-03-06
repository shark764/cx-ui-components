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
import styled, { css } from 'styled-components';

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
`;

const InputWrapper = styled.div`
  flex-grow: 1;
`;

const InputCss = css`
  width: 100%;
  height: 32px;
  padding-left: 10px;
  font-size: 13px;
  border: 1px solid;
  border-color: ${props => props.hasError ? 'red' : 'transparent'};
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.2) inset,
    0 -1px 0 rgba(0, 0, 0, 0.05) inset;

  &::placeholder {
    color: #CCCCCC
  }

  &:focus {
    outline: 0;
    border-color: #3498db;
    box-shadow:
      inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }
`;

const Input = styled.input`
  ${InputCss}
`;

const Textarea = styled.textarea`
  ${InputCss}
  height: 64px;
  padding-top: 10px;
`;

const Select = styled.select`
  ${InputCss}
`;

const Error = styled.span`
  color: red;
`;

const Warning = styled.span`
  color: orange;
`;

const renderField = ({
  input,
  label,
  componentType,
  type,
  options,
  meta: { touched, error, warning }
}) => {
  let inputElement;
  if (componentType === 'input') {
    inputElement = <Input {...input} type={type} hasError={!!error} />;
  } else if (componentType === 'textarea') {
    inputElement = <Textarea {...input} hasError={!!error} />;
  } else if (componentType === 'select') {
    inputElement = (
      <Select {...input} hasError={!!error}>
        <Fragment>
          <option />
          {options.map(option =>
            <option key={option.value} value={option.value}>{option.label}</option>
          )}
        </Fragment>
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
}

export default function Field(props) {
  return (
    <ReduxFormField {...props} component={renderField} />
  );
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  componentType: PropTypes.oneOf(['input', 'textarea', 'select']),
  inputType: PropTypes.oneOf(['text']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ),
}

Field.defaultProps = {
  componentType: 'input',
}
