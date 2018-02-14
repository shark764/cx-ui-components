```js
const data = [{
  name: 'Angry Customer',
  code: 202,
  desc: 'Indicates angry customer',
}, {
  name: 'Do Not Call',
  code: 203,
  desc: 'Indicates customer on no call list',
}];

const columns = [{
  id: 'dispositionName',
  Header: 'Disposition Name',
  accessor: 'name'
}, {
  id: 'dispositionCode',
  Header: 'Disposition Code',
  accessor: 'code',
}, {
  id: 'description',
  Header: 'Description',
  accessor: 'desc',
}];


<ListsDetailsPanel
  name='Disposition Codes'
  description='Disposition Codes List'
  alertMessage='I made this special list just for you!'
  tableData={data}
  tableColumns={columns}
/>
```
