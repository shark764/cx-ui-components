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

const SlimButton = styled(Button)`
  max-width: 200px;
  width: 45%;
  height: 30px;
  padding: 3px 10px;
  margin: 10px;
  float: right;
`;

function SidePanelActions(props) {
  return (
      <div id={props.id} className={props.className}>
      <SlimButton
        type="submit"
        buttonType="primary"
        disabled={props.isSaving || props.pristine || props.invalid}
        onClick={props.onSubmit}
        id="sdpanel-submit"
      >
        {props.isSaving ? 'Saving' : 'Submit'}
      </SlimButton>
      <SlimButton
        type="button"
        buttonType="secondary"
        onClick={props.onCancel}
        id="sdpanel-cancel"
      >
        Cancel
      </SlimButton>
    </div>
  );
}

SidePanelActions.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  isSaving: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  invalid: PropTypes.bool
};

export default SidePanelActions;
