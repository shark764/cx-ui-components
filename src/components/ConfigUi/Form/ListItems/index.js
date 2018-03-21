/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * ListItemsForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Field from '../../Field';
import SidePanelActions from '../../SidePanelActions';
import SidePanelHeader from '../../SidePanelHeader';

export default function ListItemsForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.listName ?
        <SidePanelHeader title={`Creating List Item for ${props.listName}`} /> :
        <SidePanelHeader title={`Updating List Item: ${props.listItemName}`} />}
      <br/>
      {props.fieldItems.map(field =>
        field.type === 'boolean' ?
          <Field
            key={field.name}
            name={field.name}
            label={`${field.label}${field.required ? ' *' : ''}`}
            disabled={props.isSaving}
            componentType="select"
            inputType="boolean"
          /> :
          <Field
            key={field.name}
            name={field.name}
            label={`${field.label}${field.required ? ' *' : ''}`}
            disabled={props.isSaving}
            componentType="input"
            inputType={field.type === 'string' ? 'text' : field.type}
          />
      )}
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
};
