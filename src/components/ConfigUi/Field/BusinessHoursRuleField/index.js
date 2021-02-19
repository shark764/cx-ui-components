import React from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';

import FieldWrapper from '../FieldWrapper';
import BusinessHoursRule from '../../../ConfigUi/BusinessHoursRule';

const BusinessHours = props => {
  const {
    input,
    customActions,
    deleteAction,
    copyAction,
    cancel,
    onSave,
    showActions,
    disabled,
    viewOnly,
    meta: { touched, error: {errorMessage, ...errorObj} = {}, warning, error, dirty },
  } = props;
  const fieldWrapperProps = {
    input: input.name,
    label: '',
    hideLabel: true,
    touched,
    error: errorMessage,
    warning,
  };
  return (
    <FieldWrapper {...fieldWrapperProps} inputName={input.name}>
      <BusinessHoursRule
        onChange={rule => {
          input.onChange(rule);
        }}
        rule={input.value}
        customActions={customActions}
        cancel={cancel}
        deleteAction={deleteAction}
        copyAction={!error && copyAction}
        saveException={!error && dirty}
        onSave={onSave}
        showActions={showActions}
        disabled={disabled}
        error={errorObj}
        viewOnly={viewOnly}
        onBlur={() => input.onBlur(undefined)}
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
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  errorObj: PropTypes.object,
  viewOnly: PropTypes.bool
};

BusinessHoursRuleField.propTypes = {
  name: PropTypes.string.isRequired,
  actions: PropTypes.object,
  cancel: PropTypes.func,
  saveException: PropTypes.bool,
  onSave: PropTypes.func,
  showActions: PropTypes.bool,
  disabled: PropTypes.bool,
  viewOnly: PropTypes.bool
};
