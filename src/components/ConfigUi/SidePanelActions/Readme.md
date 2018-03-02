```js
function handleSubmit() {
  console.log('Handle Submit');
}

function handleCancel() {
  console.log('Handle Cancel');
}

<SidePanelActions onSubmit={handleSubmit} onCancel={handleCancel} />;
```
