```js
const data1 = {
  startTimestamp: 'meh',
  agentName: 'Nick Guimond',
  direction: 'inbound',
  channel: 'voice',
  customer: '+15067994185',
  contactPoint: '+15067994185',
  flowName: 'Sales',
  monitoring: [
    {
      agentId: 'asdadayya9takhdkjsad87687',
      agentName: 'Supervisor Joe',
      bargedIn: false,
      endTimeStamp: null,
      startTimestamp: 'anothertime',
    },
    {
      agentId: 'asdadayyata7khdkjsad87687',
      agentName: 'Supervisor 2',
      bargedIn: true,
      endTimeStamp: 'anothertime',
      startTimestamp: 'anothertime',
    },
  ],
};
const data2 = {
  startTimestamp: 'meh',
  agentName: 'Joe Smith',
  direction: 'outbound',
  channel: 'voice',
  customer: '+15067994185',
  contactPoint: '+15067994185',
  flowName: 'Not Sales',
  monitoring: [
    {
      agentId: 'asdadayyatakhdkjsada87687',
      agentName: 'Supervisor Joe',
      bargedIn: false,
      endTimeStamp: null,
      startTimestamp: '2018-01-24T13:22:59.054Z',
    },
    {
      agentId: 'asdadayyatakhdkjsad8d7687',
      agentName: 'Supervisor 2',
      bargedIn: true,
      endTimeStamp: '2018-01-24T13:22:59.054Z',
      startTimestamp: '2018-01-24T13:22:59.054Z',
    },
  ],
};

<InteractionDetails twelveHourFormat data={data1} />;
<InteractionDetails twelveHourFormat={false} data={data2} />;
```
