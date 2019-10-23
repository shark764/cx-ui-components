/*
 * Copyright © 2015-2017 Serenova, LLC. All rights reserved.
 */

export const defaultTheme = {
  primaryColor: '#07487a',
  accentColor: '#0E98F1',
  accentHoverColor: '#E0E0E0',
};

export const colors = {
  lightGray: '#ebebeb',
  offWhite: '#e4e4e4',
  lightRed: '#FE4565',
  regularRed: '#E43D5A',
  darkRed: '#CB3750',
  darkGreen: '#001b1e',
  hoverDarkGreen: 'rgba(0, 27, 30, 0.85)',
  black: '#000',
  white: '#FFFFFF',
  skylightBlue: '#23cdf4',
  toggleChecked: '#54B84F',
  toggleCheckedDisabled: '#b7e3b3',
};

export const regions = [
  { label: 'Tenant Default Region', value: 'default', awsId: 'default' },
  { label: 'Global Low Latency', value: 'gll', awsId: null },
  { label: 'Australia', value: 'au1', awsId: 'ap-southeast-2' },
  { label: 'Brazil', value: 'br1', awsId: 'sa-east-1' },
  { label: 'Germany', value: 'de1', awsId: 'eu-central-1' },
  { label: 'Ireland', value: 'ie1', awsId: 'eu-west-1' },
  { label: 'Japan', value: 'jp1', awsId: 'ap-northeast-1' },
  { label: 'Singapore', value: 'sg1', awsId: 'ap-southeast-1' },
  { label: 'US East Coast (Virginia)', value: 'us1', awsId: 'us-east-1' },
  { label: 'US West Coast (Oregon)', value: 'us2', awsId: 'us-west-2' },
  { label: 'Interconnect - Ireland', value: 'ie1-ix', awsId: null },
  { label: 'Interconnect - Sigapore', value: 'sg1-ix', awsId: null },
  { label: 'Interconnect - US East', value: 'us1-ix', awsId: null },
  { label: 'Interconnect - US West', value: 'us2-ix', awsId: null },
];
