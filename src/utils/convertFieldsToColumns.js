/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

/*
 * This functions helps format data to work well with React Table Columns
 */

/*
 * input:
 *
 * [{
 *  name: 'reasonName', label: 'Reason Name', ...
 * }];
 *
 * output:
 *
 * [{
 *  id: 'reasonName', Header: 'Reason Name', accessor: 'reasonName'
 * }];
 *
 */

import React from 'react';
import Button from '../components/ConfigUi/Button';

export default function convertFieldsToColumns(fields, updateSubEntity) {
  return fields.map(field => ({
    id: field.name,
    Header: field.label,
    accessor: d => {
      if (field.name === 'subEntityActions') {
        return <Button onClick={() => updateSubEntity(d.key)}>Update</Button>;
      } else {
        return d[field.name] !== undefined ? `${d[field.name]}` : ''; // Literal for booleans
      }
    }
  }));
}
