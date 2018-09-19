```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');
const { Map } = require('immutable');

<Store>
  <Form >
    <ListField
      name="urls"
      label="Urls"
    />
    <ListField
      name="fields"
      label="Fields"
    />
  </Form>
</Store>
```
