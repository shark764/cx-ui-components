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

const fields = [
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

<ListsDetailsPanel
  listType="Reason Codes Type"
  alertMessage="I made this special list just for you!"
  tableItems={items}
  tableFields={fields}
  openCreateListItemModal={() => alert('openCreateListItemModal')}
>
  ListsForm goes here
</ListsDetailsPanel>;
```
