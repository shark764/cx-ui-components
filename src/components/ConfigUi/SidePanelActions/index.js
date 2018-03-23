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

const Wrapper = styled.div`
padding-right: 50px;
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
  return (
      <Wrapper id={props.id} className={props.className}>
      <SlimButton
        type="submit"
        buttonType="primary"
        disabled={props.isSaving || props.pristine}
        onClick={props.onSubmit}
      >
        {props.isSaving ? 'Saving' : 'Submit'}
      </SlimButton>
      <SlimButton type="button" buttonType="secondary" onClick={props.onCancel}>
        Cancel
      </SlimButton>
    </Wrapper>
  );
}

SidePanelActions.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  isSaving: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
};

export default SidePanelActions;
