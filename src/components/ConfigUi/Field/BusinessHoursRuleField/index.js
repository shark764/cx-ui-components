import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';

import FieldWrapper from '../FieldWrapper';
import BusinessHoursRule from '../../../ConfigUi/BusinessHoursRule';

const BusinessHours = props => {
  const {
    input,
    actions,
    cancel,
    saveException,
    onSave,
    showActions,
    meta: { touched, error, warning },
  } = props;
  const fieldWrapperProps = {
    input: input.name,
    label: '',
    hideLabel: true,
    touched,
    error,
    warning,
  };
  return (
    <FieldWrapper {...fieldWrapperProps} inputName={input.name}>
      <BusinessHoursRule
        onChange={rule => {
          input.onChange(rule);
          input.onBlur();
        }}
        rule={input.value}
        actions={actions}
        cancel={cancel}
        saveException={saveException}
        onSave={onSave}
        showActions={showActions} 
      />
    </FieldWrapper>
  );
};

export const BusinessHoursRuleField = props => <ReduxFormField {...props} component={BusinessHours} />;

BusinessHours.propTypes = {
  input: PropTypes.object.isRequired,
  actions: PropTypes.object,
  cancel: PropTypes.func,
  saveException: PropTypes.bool,
  onSave: PropTypes.func,
  showActions: PropTypes.bool,
  meta: PropTypes.object
};

BusinessHoursRuleField.propTypes = {
  name: PropTypes.string.isRequired,
  actions: PropTypes.object,
  cancel: PropTypes.func,
  saveException: PropTypes.bool,
  onSave: PropTypes.func,
  showActions: PropTypes.bool
};
