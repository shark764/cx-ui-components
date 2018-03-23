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
import SidePanelTableActions from '../components/ConfigUi/SidePanelTableActions';

export default function convertFieldsToColumns(fields, updateSubEntity, deleteSubEntity, userHasUpdatePermission) {
  return fields.map(field => ({
    id: field.name,
    Header: field.label,
    filterable: field.name !== 'subEntityActions',
    accessor: d => {
      if (field.name === 'subEntityActions') {
        return userHasUpdatePermission && <SidePanelTableActions row={d} updateSubEntity={updateSubEntity} deleteSubEntity={deleteSubEntity} />;
      } else {
        return d[field.name] !== undefined ? `${d[field.name]}` : ''; // Literal for booleans
      }
    }
  }));
}
