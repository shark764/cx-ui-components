```js
const Store = require('../../../../utils/store');
const { reduxForm } = require('redux-form/immutable');
const ListsFormContainer = reduxForm({
  form: 'lists',
})(ListsForm);

<Store>
  <ListsFormContainer
    onSubmit={values => alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)}
    fieldItems={[
      {
        name: 'name',
        label: 'Name',
        type: 'input',
        required: true,
        isSaving: false,
      },
      {
        name: 'listTypeId',
        label: 'List Type',
        type: 'select',
        required: true,
        isSaving: false,
        options: [
          {
            label: 'Disposition Codes Type',
            value: '57083780-332d-11e6-8dd4-c88eee4d9f61',
          },
          {
            label: 'Reason Codes Type',
            value: '57083781-332d-11e6-8dd4-c88eee4d9f61',
          },
        ],
      },
    ]}
  />
</Store>;
```
