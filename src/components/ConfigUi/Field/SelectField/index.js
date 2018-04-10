import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import { Input } from '../StyledInputs';

const Select = Input.withComponent('select');

const SelectInput = ({
  input,
  label,
  disabled,
  meta: { touched, error, warning },
  options,
  required,
}) => {
  if (options === 'boolean') {
    options = [
      { label : 'True', value: true },
      { label : 'False', value: false }
    ];
  }
  return (
    <FieldWrapper inputName={input.name} label={label} touched={touched} error={error} warning={warning}>
      <Select {...input} disabled={disabled} hasError={touched && !!error}>
        {options ? (
          <Fragment>
            {!required && <option />}
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
    </FieldWrapper>
  );
}

const parseBoolean = (value) => {
  if (value !== undefined && value === '') {
    return null;
  } else if (value !== undefined && value !== '') {
    return value === 'true';
  } else {
    return undefined;
  }
}

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
  disabled: PropTypes.bool,
  /** Pass in an array of objects with value and label to use as options or pass in "boolean" to use true and false values */
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.bool,
        ]).isRequired,
        label: PropTypes.string,
      })
    ),
    PropTypes.oneOf(['boolean']),
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
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.bool,
        ]).isRequired,
        label: PropTypes.string,
      })
    ),
    PropTypes.oneOf(['boolean']),
  ]),
  required: PropTypes.bool,
};
