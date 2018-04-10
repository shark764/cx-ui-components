import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import TemplateTextEditor from '../../TemplateTextEditor';
import FieldWrapper from '../FieldWrapper';
import { CustomInput } from '../StyledInputs';

const TemplateTextEditorInput = ({
  input,
  label,
  disabled,
  meta: { touched, error, warning },
  templates,
}) =>
  <FieldWrapper inputName={input.name} label={label} touched={touched} error={error} warning={warning}>
    <CustomInput disabled={disabled} hasError={touched && !!error}>
      <TemplateTextEditor {...input} disabled={disabled} templates={templates} />
    </CustomInput>
  </FieldWrapper>

export default function TemplateTextEditorField(props) {
  return <ReduxFormField {...props} component={TemplateTextEditorInput} />;
}

TemplateTextEditorField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  templates: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TemplateTextEditorField.defaultProps = {
  disabled: false,
};

TemplateTextEditorInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  templates: PropTypes.arrayOf(PropTypes.string).isRequired,
};
