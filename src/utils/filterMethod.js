/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

import { camelCaseToRegularForm } from 'serenova-js-utils/strings';

export function filterSelectMethod(filter, row) {
  // Show all items on 'All'
  // Check match otherwise
  return filter.value === 'all'
    ? true
    : camelCaseToRegularForm(row[filter.id]) ===
        camelCaseToRegularForm(filter.value);
}

export function filterDefaultMethod(filter, row) {
  return (
    String(row[filter.id])
      .toLowerCase()
      .indexOf(filter.value.toLowerCase()) > -1
  );
}
