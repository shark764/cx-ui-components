import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import { Input } from '../StyledInputs';
import { css } from 'styled-components';

const Select = Input.withComponent('select').extend`
  ${props =>
    !props.disabled &&
    css`
      cursor: pointer;
    `}
`;

const SelectInput = props => {
  let options =
    props.options === 'boolean' ? [{ label: 'True', value: true }, { label: 'False', value: false }] : props.options;
  const { input, label, id, className, disabled, meta: { touched, error, warning }, required } = props;

  return (
    <FieldWrapper inputName={input.name} label={label} touched={touched} error={error} warning={warning}>
      <Select
        {...input}
        id={id}
        className={className}
        data-automation={props['data-automation']}
        disabled={disabled}
        hasError={touched && !!error}
      >
        {options ? (
          <Fragment>
            {!required && (
              <option disabled hidden value="">
                -- Please select --
              </option>
            )}
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </Fragment>
        ) : (
          <option>Loading...</option>
        )}
      </Select>
    </FieldWrapper>
  );
};

const parseBoolean = value => {
  if (value !== undefined && value === '') {
    return null;
  } else if (value !== undefined && value !== '') {
    return value === 'true';
  } else {
    return undefined;
  }
};

export default function SelectField(props) {
  if (props.options === 'boolean') {
    return <ReduxFormField {...props} component={SelectInput} parse={parseBoolean} />;
  } else {
    return <ReduxFormField {...props} component={SelectInput} />;
  }
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  'data-automation': PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  /** Pass in an array of objects with value and label to use as options or pass in "boolean" to use true and false values */
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        label: PropTypes.string,
      })
    ),
    PropTypes.oneOf(['boolean']),
    PropTypes.object,
  ]),
  /** Will have an empty option when false */
  required: PropTypes.bool,
};

SelectField.defaultProps = {
  disabled: false,
  required: false,
};

SelectInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  'data-automation': PropTypes.string,
  meta: PropTypes.object,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        label: PropTypes.string,
      })
    ),
    PropTypes.oneOf(['boolean']),
    PropTypes.object,
  ]),
  required: PropTypes.bool,
};
