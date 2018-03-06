```js
const Store = require('../../../../utils/store');
const { reduxForm } = require('redux-form/immutable');
const ListsFormContainer = reduxForm({
  form: 'lists',
  onSubmit: values =>
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`),
})(ListsForm);

<Store>
  <ListsFormContainer
    onSubmit={values => alert(JSON.stringify(values, null, 2))}
    listTypes={[
      {
        label: 'Disposition Codes Type',
        value: '57083780-332d-11e6-8dd4-c88eee4d9f61',
      },
      {
        label: 'Reason Codes Type',
        value: '57083781-332d-11e6-8dd4-c88eee4d9f61',
      },
    ]}
  />
</Store>;
```
