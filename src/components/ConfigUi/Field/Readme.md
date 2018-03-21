```js
const Store = require('../../../utils/store');
const Form = require('../../../utils/reduxForm');

<Store>
  <Form>
    <Field name="text" label="Text" />
    <Field name="textarea" label="Textarea" componentType="textarea" />
    <Field
      name="select"
      label="Select"
      componentType="select"
      options={[
        {
          label: 'Option one',
          value: '1',
        },
        {
          label: 'Option two',
          value: '2',
        },
      ]}
    />
    <Field
      name="selectLoading"
      label="Select loading options"
      componentType="select"
    />
    <Field
      name="boolean"
      label="Boolean"
      componentType="select"
      inputType="boolean"
    />
  </Form>
</Store>
```
