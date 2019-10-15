import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import TemplateTextEditor from '../../TemplateTextEditor';
import FieldWrapper from '../FieldWrapper';
import { CustomInput } from '../StyledInputs';

const TemplateTextEditorInput = props => {
  const { input, label, id, className, disabled, meta: { touched, error, warning }, templates } = props;

  return (
    <FieldWrapper inputName={input.name} label={label} touched={touched} error={error} warning={warning}>
      <CustomInput disabled={disabled} hasError={touched && !!error}>
        <TemplateTextEditor
          {...input}
          id={id}
          className={className}
          data-automation={props['data-automation']}
          disabled={disabled}
          templates={templates}
        />
      </CustomInput>
    </FieldWrapper>
  );
};

export default function TemplateTextEditorField(props) {
  return <ReduxFormField {...props} component={TemplateTextEditorInput} />;
}

TemplateTextEditorField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  templates: PropTypes.arrayOf(PropTypes.string).isRequired,
  'data-automation': PropTypes.string,
};

TemplateTextEditorField.defaultProps = {
  disabled: false,
};

TemplateTextEditorInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  templates: PropTypes.arrayOf(PropTypes.string).isRequired,
  'data-automation': PropTypes.string,
};
