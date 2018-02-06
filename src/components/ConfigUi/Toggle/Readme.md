```js
initialState = {
  toggleStatus1: false,
  toggleStatus2: false,
};

function toggle(toggle) {
  var newState = {};
  newState[toggle] = !state[toggle];
  setState(newState);
}
<div>
  <Toggle value={state.toggleStatus1} onChange={() => toggle('toggleStatus1')} />
  <Toggle value={state.toggleStatus2} onChange={() => toggle('toggleStatus2')} disabled />
</div>
```
