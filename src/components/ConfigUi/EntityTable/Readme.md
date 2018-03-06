```js
const items = [
  {
    reasonName: 'Break',
    reasonCode: 101,
    description: 'Indicates agent is on a break',
  },
  {
    reasonName: 'Customer Research',
    reasonCode: 103,
    description: 'Indicates agent is doing customer research',
  },
  {
    reasonName: 'End of Shift',
    reasonCode: 102,
    description: "Indicates agent's shift has ended",
  },
];

const columns = [
  {
    type: 'string',
    name: 'reasonName',
    label: 'Reason Name',
    required: true,
  },
  {
    type: 'number',
    name: 'reasonCode',
    label: 'Reason Code',
    required: true,
  },
  {
    type: 'string',
    name: 'description',
    label: 'Description',
    required: true,
  },
];

<EntityTable
  pageTitle="Lists"
  pageHelpLink="https://docs.cxengage.net/Help/Content/Configuring%20CxEngage/Lists/Lists.htm"
  onSearchFilterChange={e => console.log(e.target.value)}
  onCreateBtnClick={() => console.log('SDK new list goes hereeeee')}
  items={items}
  columns={columns}
/>;
```
