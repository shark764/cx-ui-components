```js
initialState = {
  title: 'Some List',
  createdAt: 'Created on Jun 15, 2016 2:14:10 PM',
  updatedAt: 'Last updated on Sep 7, 2016 10:54:35 AM',
  enabled: false,
};

function toggle(toggle) {
  var newState = {};
  newState[toggle] = !state[toggle];
  setState(newState);
}

function handleMenuClose() {
  console.log('Closing Side Panel');
}

<SidePanelHeader
  title={state.title}
  createdAt={state.createdAt}
  updatedAt={state.updatedAt}
  toggleStatus={state.enabled}
  onToggle={() => toggle('enabled')}
  onClose={handleMenuClose}
/>;
```
