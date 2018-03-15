```js
const Store = require('../../../../utils/store');
const { reduxForm } = require('redux-form/immutable');
const ListItemsFormContainer = reduxForm({
  form: 'listItems',
})(ListItemsForm);

<Store>
  <ListItemsFormContainer
    listName="My List"
    onSubmit={values => alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)}
    onCancel={() => alert('Cancel')}
    fieldItems={[
      {
        name: 'requiredString',
        type: 'string',
        label: 'Required String',
        required: true
      },
      {
        name: 'notRequiredString',
        type: 'string',
        label: 'Not Required String',
        required: false
      },
      {
        name: 'requiredNumber',
        type: 'number',
        label: 'Required Number',
        required: true
      },
      {
        name: 'notRequiredNumber',
        type: 'string',
        label: 'Not Required Number',
        required: false
      },
      {
        name: 'requiredBoolean',
        type: 'boolean',
        label: 'Required Boolean',
        required: true
      },
      {
        name: 'notRequiredBoolean',
        type: 'boolean',
        label: 'Not Required Boolean',
        required: false
      },
    ]}
  />
</Store>;
```
