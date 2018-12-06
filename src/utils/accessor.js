/*
 * Copyright © 2015-2018 Serenova, LLC. All rights reserved.
 */

import { camelCaseToRegularForm } from 'serenova-js-utils/strings';

export function columnAccessor(field, accessor) {
  if (field.name === 'active' && typeof accessor[field.name] === 'boolean') {
    return accessor[field.name] ? 'Enabled' : 'Disabled';
  }
  if (
    field.name === 'status' ||
    field.name === 'platformStatus' ||
    field.name === 'invitationStatus'
  ) {
    return camelCaseToRegularForm(accessor[field.name]);
  }
  return accessor[field.name];
}
