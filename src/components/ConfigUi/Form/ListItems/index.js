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
      <SidePanelHeader title={`Creating List Item for ${props.listName}`} />
      <br/>
      {props.fieldItems.map(field =>
        field.type === 'boolean' ?
          <Field
            key={field.name}
            name={field.name}
            label={`${field.label}${field.required ? ' *' : ''}`}
            disabled={props.isSaving}
            componentType="select"
            options={[
              {label : 'True', value: true},
              {label : 'False', value: false}
            ]}
          /> :
          <Field
            key={field.name}
            name={field.name}
            label={`${field.label}${field.required ? ' *' : ''}`}
            disabled={props.isSaving}
            componentType="input"
            inputType="text"
          />
      )}
      <SidePanelActions onCancel={props.onCancel} isSaving={props.isSaving} />
    </form>
  );
}

ListItemsForm.propTypes = {
  listName: PropTypes.string.isRequired,
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
