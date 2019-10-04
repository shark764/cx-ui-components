/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

import React from 'react';
import { getFormattedValue } from './';

export function formatCell(value, format) {
  if (format !== undefined) {
    const formattedValue = getFormattedValue(value, format);
    return <span title={`${formattedValue}`}>{`${formattedValue}`}</span>;
  }
  return value && <span title={`${value}`}>{`${value}`}</span>;
}
