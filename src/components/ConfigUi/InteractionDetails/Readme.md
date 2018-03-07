```js
const data = {
  startTimestamp: 'meh',
  agentName: 'Nick Guimond',
  direction: 'inbound',
  channel: 'voice',
  customer: '+15067994185',
  contactPoint: '+15067994185',
  flowName: 'Sales',
  monitoring: [
    {
      agentId: 'asdadayyatakhdkjsad87687',
      agentName: 'Supervisor Joe',
      bargedIn: false,
      endTimeStamp: null,
      startTimestamp: 'anothertime',
    },
  ],
};

<InteractionDetails twelveHourFormat data={data} />;
```