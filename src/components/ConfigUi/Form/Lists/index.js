/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/**
 *
 * ListsForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Field from '../../Field';

export default function ListsForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
      {props.fieldItems.map(field =>
         <Field
          key={field.name}
          name={field.name}
          label={`${field.label}${field.required ? ' *' : ''}`}
          disabled={props.isSaving || props.inherited}
          componentType={field.type}
          dataType={field.dataType}
          options={props.listTypes}
        />
      )}
      </div>
    </form>
  );
}

ListsForm.propTypes = {
  listTypes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string.isRequired,
    })
  ),
  handleSubmit: PropTypes.func.isRequired,
  update: PropTypes.bool,
  fieldItems: PropTypes.any,
  isSaving: PropTypes.bool,
  inherited: PropTypes.bool,
};

ListsForm.defaultProps = {
  listTypes: [],
  update: false,
};
