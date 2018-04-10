```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');
const { Map } = require('immutable');

<Store>
  <Form initialValues={new Map({ toggle: false, toggle2: false })}>
    <ToggleField
      name="toggle"
      label="Toggle"
    />
    <ToggleField
      name="toggle2"
      label="Disabled Toggle"
      disabled
    />
  </Form>
</Store>
```
