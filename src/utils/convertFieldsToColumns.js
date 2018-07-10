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
    Header: <span title={field.label}>{field.label}</span>,
    filterable: field.name !== 'subEntityActions',
    accessor: d => d[field.name],
    Cell: ({value}) => (value !== undefined && <span title={`${value}`}>{`${value}`}</span>)
  }));
}
