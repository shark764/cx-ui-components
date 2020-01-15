```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');
const { Map } = require('immutable');
const { isSerializedOrigin } = require('serenova-js-utils/strings');

<Store>
  <Form>
    <ListField name="urls" label="Urls" />
    <ListField
      name="urls"
      label="Urls with validation"
      inputValidation={isSerializedOrigin}
      inputError="This is an error"
    />
    <ListField name="fields" label="Fields" />
  </Form>
</Store>;
```
