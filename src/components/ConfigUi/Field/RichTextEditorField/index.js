import React from 'react';
import PropTypes from 'prop-types';
import { RichTextEditor } from '../../RichTextEditor/index';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import { CustomInput } from '../StyledInputs';

const RichTextEditorInput = ({
  input,
  label,
  disabled,
  isDisplayContentInHtml,
  toggleMessageTemplateText,
  meta: { touched, error, warning },
}) =>
  <FieldWrapper inputName={input.name} label={label} touched={touched} error={error} warning={warning}>
    <CustomInput disabled={disabled} hasError={touched && !!error}>
      <RichTextEditor
        {...input}
        isDisplayContentInHtml={isDisplayContentInHtml}
        toggleMessageTemplateText={(isDisplayContentInHtml) => toggleMessageTemplateText(isDisplayContentInHtml)}
        disabled={disabled} />
    </CustomInput>
  </FieldWrapper>

export default function RichTextEditorField(props) {
  return <ReduxFormField {...props} component={RichTextEditorInput} />
};

RichTextEditorField.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  toggleMessageTemplateText: PropTypes.func,
  isDisplayContentInHtml: PropTypes.bool,
};

RichTextEditorField.defaultProps = {
  disabled: false
};
