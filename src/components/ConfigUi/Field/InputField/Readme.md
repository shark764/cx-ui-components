```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');

<Store>
  <Form>
    <InputField name="text" label="Text" />
    <InputField name="textarea" label="Textarea" componentType="textarea" />
    <InputField name="disabledText" label="Disabled Text" disabled />
    <InputField name="disabledTextarea" label="Disabled Textarea" componentType="textarea" disabled />
    <InputField name="text" label="Text" labelHelpText="Small Help Text" />
    <InputField name="password" label="Password" autoComplete={"new-password"} />
  </Form>
</Store>
```
