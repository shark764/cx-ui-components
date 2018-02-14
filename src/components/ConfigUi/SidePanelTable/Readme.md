```js
const data = [{
  name: 'Tanner',
  age: 26,
  friend: {
    name: 'Jason',
    age: 23,
  }
}, {
  name: 'John',
  age: 30,
  friend: {
    name: 'Ben',
    age: 24,
  }
}];

const columns = [{
  id: 'Name',
  Header: 'Name',
  accessor: 'name'
}, {
  id: 'Age',
  Header: 'Age',
  accessor: 'age',
}, {
  id: 'friendName',
  Header: 'Friends Name',
  accessor: 'friend.name',
}, {
  id: 'friendAge',
  Header: 'Friends Age',
  accessor: 'friend.age',
}];

<SidePanelTable
  data={data}
  columns={columns}
/>
```
