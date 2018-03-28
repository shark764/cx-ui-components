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

export default function convertFieldsToColumns(fields) {
  return fields.map(field => ({
    id: field.name,
    Header: field.label,
    filterable: field.name !== 'subEntityActions',
    accessor: d => d[field.name] !== undefined && <abbr title={`${d[field.name]}`}>{`${d[field.name]}`}</abbr>
  }));
}
