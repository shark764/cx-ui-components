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

export const pixelToVH = value => 100 * value / window.innerHeight;

export const pixelToVW = value => 100 * value / window.innerWidth;

export const vhToPixel = value => window.innerHeight * value / 100;

export const vwToPixel = value => window.innerWidth * value / 100;

export function getClosestValue(arr, value) {
  // Returns the closest item in an array to value given
  return (
    arr && arr.length && arr.reduce((prev, curr) => (Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev))
  );
}
