/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * Field
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field as ReduxFormField } from 'redux-form/immutable';
import styled from 'styled-components';

const FieldWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  margin-left: 10px;
  padding-right: 10px;
  font-size: 14px;
`;

const Label = styled.label`
  display: inline-block;
  width: 150px;
`;

const StyledField = styled(ReduxFormField)`
  flex-grow: 1;
  height: ${props => props.component === 'textarea' ? '64px' : '32px'};
  padding-top: ${props => props.component === 'textarea' ? '10px' : '0px'};
  padding-left: 10px;
  font-size: 13px;
  border: 1px solid transparent;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.2) inset,
    0 -1px 0 rgba(0, 0, 0, 0.05) inset;

  &::placeholder {
    color: #CCCCCC
  }

  &:focus {
    outline: 0;
    border-color: #3498db;
    box-shadow:
      inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }
`;

export default function Field(props) {
  return (
    <FieldWrapper>
      <Label htmlFor={props.name}>{props.label}</Label>
      {props.component === 'select' ?
        <StyledField name={props.name} component={props.component} type={props.type}>
          <Fragment>
            <option />
            {props.options.map(option =>
              <option key={option.value} value={option.value}>{option.label}</option>
            )}
          </Fragment>
        </StyledField> :
        <StyledField name={props.name} component={props.component} type={props.type} />}
    </FieldWrapper>
  );
}

Field.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  component: PropTypes.oneOf(['input', 'textarea', 'select']),
  type: PropTypes.oneOf(['text']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string,
    })
  ),
}

Field.defaultProps = {
  component: 'input',
}
