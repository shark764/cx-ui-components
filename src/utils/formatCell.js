/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

import React from 'react';
import { fullDateString, timeStampToSeconds } from './time';

export function formatCell(value, format) {
  if (format === undefined) {
    return value && <span title={`${value}`}>{`${value}`}</span>;
  }
  if (format === 'date') {
    return (
      value && (
        <span title={fullDateString(timeStampToSeconds(value))}>{fullDateString(timeStampToSeconds(value))}</span>
      )
    );
  }
}
