/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

import { camelCaseToRegularForm } from 'serenova-js-utils/strings';
import { getFormattedValue } from './';

export function filterDefaultMethod(filter, row) {
  return (
    String(row[filter.id])
      .toLowerCase()
      .indexOf(filter.value.toLowerCase()) > -1
  );
}

export function filterSelectMethod(filter, row) {
  // Show all items on 'All'
  // Check match otherwise
  // We remove white spaces since camelCaseToRegularForm adds
  // empty space at beginning when string has capital letter
  return filter.value === 'all'
    ? true
    : camelCaseToRegularForm(row[filter.id]).trim() === camelCaseToRegularForm(filter.value).trim();
}

export function filterFormattedValueMethod(filter, row, format) {
  const value = getFormattedValue(row[filter.id], format);
  return (
    String(value)
      .toLowerCase()
      .indexOf(filter.value.toLowerCase()) > -1
  );
}
