/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * ListItemsForm
 *
 */

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import InputField from '../../Field/InputField';
import SelectField from '../../Field/SelectField';
import styled from 'styled-components';
import SidePanelActions from '../../SidePanelActions';

const Header = styled.h3`
  font-size: 28px;
  margin-bottom: 30px;
  color: #474747;
  font-weight: 700;
  display: inline-block;
`;
const Item = styled.h3`
  color: #474747;
  font-size: 28px;
  max-width: 55%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  font-weight: initial;
  margin-left: 30px;
  margin-bottom: -7px;
  padding-right: 10px;
`;

const Wrapper = styled.div`
  max-height: 50vh;
  overflow: auto;
  margin-bottom: 10px;
`;

export default function ListItemsForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.listName?
        <Fragment><Header>Creating list item for : </Header><Item>{props.listName}</Item></Fragment> :
        <Fragment><Header>Updating list item : </Header><Item>{props.listItemName}</Item></Fragment>
      }
      <Wrapper>
      {props.fieldItems.map(field =>
        field.type === 'boolean' ?
          <SelectField
            key={field.name}
            name={field.name}
            label={`${field.label}${field.required ? ' *' : ''}`}
            disabled={props.isSaving}
            options="boolean"
          /> :
          <InputField
            key={field.name}
            name={field.name}
            label={`${field.label}${field.required ? ' *' : ''}`}
            disabled={props.isSaving}
            componentType="input"
            dataType={field.type}
          />
      )}
      </Wrapper>
      <SidePanelActions
        onCancel={props.onCancel}
        isSaving={props.isSaving}
        pristine={props.pristine}
      />
    </form>
  );
}

ListItemsForm.propTypes = {
  listName: PropTypes.string,
  listItemName: PropTypes.string,
  fieldItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['string', 'number', 'boolean']).isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      required: PropTypes.bool,
    })
  ).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isSaving: PropTypes.bool,
  pristine: PropTypes.bool,
};
