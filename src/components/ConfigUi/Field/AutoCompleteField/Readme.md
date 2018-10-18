```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');

<Store>
  <Form>
    <AutoCompleteField
      name="AutoComplete"
      label="AutoComplete"
      suggestions={['Option 1', 'Option 2', 'Option 3']}
      disabled={false}
    />
    <AutoCompleteField
      name="requiredAutoComplete"
      label="Required AutoComplete *"
      suggestions={['Option 1', 'Option 2', 'Option 3']}
      required
    />
    <AutoCompleteField
      name="disabledOptionAutoComplete"
      label="Disabled Option AutoComplete"
      suggestions={['Option 1', 'Option 2', 'Option 3']}
      disabled={true}
    />
  </Form>
</Store>
```
