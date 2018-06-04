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
import InputField from '../../Field/InputField';
import SelectField from '../../Field/SelectField';
import ToggleField from '../../Field/ToggleField';

export default function ListsForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <InputField
          name="name"
          label="Name *"
          componentType="input"
          inputType="text"
          disabled={props.isSaving || props.inherited}
        />
        <ToggleField
          name="shared"
          label="Shared *"
          disabled={props.isSaving || props.inherited}
        />
        {!props.update && (
          <SelectField
            name="listTypeId"
            label="List Type *"
            options={props.listTypes}
            disabled={props.isSaving}
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
  isSaving: PropTypes.bool,
  inherited: PropTypes.bool,
};

ListsForm.defaultProps = {
  listTypes: [],
  update: false,
};
