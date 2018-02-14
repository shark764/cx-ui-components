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

`;

const SlimButton = styled(Button)`
  max-width: 200px;
  width: 45%;
  height: 30px;
  padding: 3px 10px;
  margin: 10px;
  float: right;
`

function SidePanelActions(props) {
  return (
    <Wrapper
      id={props.id}
      className={props.className}
    >
      <SlimButton type='primary' onClick={props.onSubmit}>
        Submit
      </SlimButton>
      <SlimButton type='secondary' onClick={props.onCancel}>
        Cancel
      </SlimButton>
    </Wrapper>
  );
}

SidePanelActions.propTypes = {
  id: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default SidePanelActions;
