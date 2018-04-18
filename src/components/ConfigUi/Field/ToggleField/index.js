import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import Toggle from '../../Toggle';
import FieldWrapper from '../FieldWrapper';

const ToggleInput = ({
  input,
  label,
  disabled,
  meta: { touched, error, warning },
}) =>
  <FieldWrapper inputName={input.name} label={label} touched={touched} error={error} warning={warning}>
    <Toggle {...input} disabled={disabled} />
  </FieldWrapper>

const parseToggle = value => value === true

export default function ToggleField(props) {
  return <ReduxFormField {...props} component={ToggleInput} parse={parseToggle} />;
}

ToggleField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

ToggleField.defaultProps = {
  disabled: false,
}

ToggleInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
};