/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
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

import FilterSelect from '../components/ConfigUi/Filter/FilterSelect';
import FilterInput from '../components/ConfigUi/Filter/FilterInput';
import { filterSelectMethod, filterDefaultMethod } from './filterMethod';
import { columnAccessor } from './accessor';

export default function convertFieldsToColumns(fields, tableType) {
  return fields.map(field => ({
    id: field.name,
    Header: <span title={field.label}>{field.label}</span>,
    filterable: field.filterable !== false && field.name !== 'subEntityActions',
    accessor: d => columnAccessor(field, d),
    Cell: ({ original: { id, skillId, hasProficiency }, value }) => {
      // We do the double check of editable column, because there could
      // be specific columns that we want to block from editing.
      return field.isColumnEditable && hasProficiency ? (
        <input
          style={{ maxWidth: '90px', paddingLeft: '8px' }}
          type="number"
          min="1"
          max="100"
          value={value}
          onChange={
            field.actions &&
            (({ target: { value } }) =>
              field.actions.onChange(id || skillId, value))
          }
        />
      ) : (
        value && <span title={`${value}`}>{`${value}`}</span>
      );
    },
    filterMethod: (filter, row) => {
      if (field.type === 'select') {
        return filterSelectMethod(filter, row);
      } else {
        return filterDefaultMethod(filter, row);
      }
    },
    Filter: ({ filter, onChange }) => {
      if (field.type === 'select') {
        return (
          <FilterSelect
            tableType={tableType}
            className={'subentity-filter-column-' + field.name}
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : 'all'}
            options={['all', ...field.filterOptions]}
          />
        );
      } else {
        return (
          <FilterInput
            className={'subentity-filter-column-' + field.name}
            onChange={event => onChange(event.target.value)}
            value={filter ? filter.value : ''}
          />
        );
      }
    }
  }));
}
