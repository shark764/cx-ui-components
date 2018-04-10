```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');

<Store>
  <Form>
    <SelectField
      name="select"
      label="Select"
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ]}
    />
    <SelectField
      name="requiredSelect"
      label="Required Select*"
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ]}
      required
    />
    <SelectField
      name="booleanSelect"
      label="Boolean Select"
      options="boolean"
    />
    <SelectField
      name="disabledSelect"
      label="Disabled Select"
      options="boolean"
      disabled
    />
  </Form>
</Store>
```
