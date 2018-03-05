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
      <Field name="name" label="Name" component="input" type="text" />
      {!props.update &&
        <Field name="listTypeId" label="List Type" component="select" options={props.listTypes} />}
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
  onSubmit: PropTypes.func.isRequired,
  update: PropTypes.bool,
};

ListsForm.defaultProps = {
  listTypes: [],
  update: false,
};
