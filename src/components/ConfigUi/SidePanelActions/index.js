/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * SidePanelActions
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import ConfirmationWrapper from '../Confirmation/ConfirmationWrapper';

const CancelConfirmationWrapper = styled(ConfirmationWrapper)`
  display: block;
`;
const SlimButton = styled(Button)`
  max-width: 200px;
  width: 45%;
  height: 30px;
  padding: 3px 10px;
  margin: 10px;
  float: right;
`;

function SidePanelActions(props) {
  // We add a confirmation for cancel button, to match
  // Config1 behavior.
  // We need to warn the user about losing all changes
  // when clicking on it.
  return (
    <div id={props.id} className={props.className}>
      <CancelConfirmationWrapper
        confirmBtnCallback={props.selectedEntityId === 'bulk' ? props.onSubmit : undefined}
        mainText={`This bulk action will affect ${props.bulkItemsAffected} items`}
        secondaryText="Do you want to continue?"
      >
        <SlimButton
          type="submit"
          buttonType="primary"
          data-automation="sdpanelSubmitButton"
          disabled={props.isSaving || props.isBulkUpdating || props.pristine || props.invalid}
          onClick={props.selectedEntityId !== 'bulk' ? props.onSubmit : undefined}
          id="sdpanel-submit"
        >
          {!props.save && (props.isSaving ? 'Saving' : 'Submit')}
          {props.save && 'Save'}
        </SlimButton>
      </CancelConfirmationWrapper>
      <CancelConfirmationWrapper
        confirmBtnCallback={props.dirty ? props.onCancel : undefined}
        mainText="You have unsaved changes that will be lost!."
        secondaryText="Click Confirm to discard changes, or Cancel to continue editing."
      >
        <SlimButton
          type="button"
          buttonType="secondary"
          onClick={!props.dirty ? props.onCancel : undefined}
          id="sdpanel-cancel"
          data-automation="sdpanelCancelButton"
          disabled={props.isSaving || props.isBulkUpdating}
        >
          Cancel
        </SlimButton>
      </CancelConfirmationWrapper>
    </div>
  );
}

SidePanelActions.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  isSaving: PropTypes.bool,
  isBulkUpdating: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  dirty: PropTypes.bool,
  invalid: PropTypes.bool,
  save: PropTypes.bool,
  selectedEntityId: PropTypes.string,
  bulkItemsAffected: PropTypes.number,
};

SidePanelActions.defaultProps = {
  selectedEntityId: '',
  bulkItemsAffected: 0,
};

export default SidePanelActions;
