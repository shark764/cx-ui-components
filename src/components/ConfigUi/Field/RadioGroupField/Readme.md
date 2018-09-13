```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');

<Store>
  <Form>
    <RadioGroupField
      name="RadioGroup"
      label="RadioGroup"
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ]}
      disabled={false}
    />
    <RadioGroupField
      name="requiredRadioGroup"
      label="Required RadioGroup *"
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ]}
      required
  />
    <RadioGroupField
      name="disabledOptionRadioGroup"
      label="Disabled Option RadioGroup"
      options={[
        { label: 'Option 1',
          value: '1',
          helpText: 'Option selectable' },
        { label: 'Option 2',
          value: '2',
          helpText: 'Option not selectable',
          disabled: true },
      ]}
    />
  </Form>
</Store>
```
