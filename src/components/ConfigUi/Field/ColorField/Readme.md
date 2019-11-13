```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');

<Store>
  <Form>
    <ColorField
      name="color"
      label="Color"
    />
    <ColorField
      name="anotherColor"
      label="Another Color To Test Overlap"
    />
    <ColorField
      name="disabledColor"
      label="Disabled Color"
      disabled
    />
  </Form>
</Store>
```
