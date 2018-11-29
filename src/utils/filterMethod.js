/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

export function filterSelectMethod(filter, row) {
  return filter.value === 'all' ? true : row[filter.id] === filter.value;
}

export function filterDefaultMethod(filter, row) {
  return (
    String(row[filter.id])
      .toLowerCase()
      .indexOf(filter.value.toLowerCase()) > -1
  );
}
