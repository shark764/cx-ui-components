import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import Toggle from '../../Toggle';
import FieldWrapper from '../FieldWrapper';

const ToggleInput = ({
  input,
  label,
  id,
  className,
  disabled,
  title,
  meta: { touched, error, warning }
}) => (
  <FieldWrapper
    inputName={input.name}
    label={label}
    touched={touched}
    error={error}
    warning={warning}
  >
    <Toggle
      {...input}
      id={id}
      className={className}
      disabled={disabled}
      title={title}
    />
  </FieldWrapper>
);

const parseToggle = value => value === true;

export default function ToggleField(props) {
  return (
    <ReduxFormField {...props} component={ToggleInput} parse={parseToggle} />
  );
}

ToggleField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string
};

ToggleField.defaultProps = {
  disabled: false
};

ToggleInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  meta: PropTypes.object
};
