/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

import { fullDateString, twelveHourTime } from './time';

export { default as importantCss } from './importantCss';
export { default as convertFieldsToColumns } from './convertFieldsToColumns';

export function getFormattedValue(value, format) {
  if (format === 'date') {
    return fullDateString(value);
  } else if (format === 'time') {
    return twelveHourTime(value);
  } else if (format === 'datetime') {
    return `${fullDateString(value)} ${twelveHourTime(value)}`;
  } else {
    return value;
  }
}
