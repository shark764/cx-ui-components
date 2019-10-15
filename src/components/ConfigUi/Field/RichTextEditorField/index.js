import React from 'react';
import PropTypes from 'prop-types';
import { RichTextEditor } from '../../RichTextEditor/index';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import { CustomInput } from '../StyledInputs';

const RichTextEditorInput = props => {
  const {
    input,
    label,
    disabled,
    isDisplayContentInHtml,
    toggleMessageTemplateText,
    meta: { touched, error, warning },
  } = props;

  return (
    <FieldWrapper inputName={input.name} label={label} touched={touched} error={error} warning={warning}>
      <CustomInput disabled={disabled} hasError={touched && !!error} data-automation={props['data-automation']}>
        <RichTextEditor
          {...input}
          isDisplayContentInHtml={isDisplayContentInHtml}
          toggleMessageTemplateText={isDisplayContentInHtml => toggleMessageTemplateText(isDisplayContentInHtml)}
          disabled={disabled}
        />
      </CustomInput>
    </FieldWrapper>
  );
};

export default function RichTextEditorField(props) {
  return <ReduxFormField {...props} component={RichTextEditorInput} />;
}

RichTextEditorField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  toggleMessageTemplateText: PropTypes.func,
  isDisplayContentInHtml: PropTypes.bool,
  'data-automation': PropTypes.string,
};
RichTextEditorInput.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  toggleMessageTemplateText: PropTypes.func,
  isDisplayContentInHtml: PropTypes.bool,
  'data-automation': PropTypes.string,
  meta: PropTypes.object,
};

RichTextEditorField.defaultProps = {
  disabled: false,
};
