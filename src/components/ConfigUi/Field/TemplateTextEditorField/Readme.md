```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');
const templates = ['template', 'other-template', 'something-else'];

<Store>
  <Form>
    <TemplateTextEditorField
      name="template"
      label="Template"
      templates={templates}
    />
    <TemplateTextEditorField
      name="disabledTemplate"
      label="Disabled Template"
      disabled
      templates={templates}
    />
  </Form>
</Store>
```
