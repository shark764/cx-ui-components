```js
const data1 = {
  agentName: 'Nick Guimond',
  direction: 'inbound',
  channelTypes: 'voice',
  state: ''
};
const data2 = {
  agentName: 'Joe Smith',
  direction: 'outbound',
  channelTypes: 'voice',
  state: ''
};

<AgentStateDetails twelveHourFormat data={data1} />;
<AgentStateDetails twelveHourFormat={false} data={data2} />;
```
