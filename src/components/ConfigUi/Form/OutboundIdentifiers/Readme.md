```js
const Store = require('../../../../utils/store');
const { reduxForm } = require('redux-form/immutable');
const OutboundIdentifiersFormContainer = reduxForm({
  form: 'outboundIdentifiers',
})(OutboundIdentifiersForm);

<Store>
  <OutboundIdentifiersFormContainer
    handleSubmit={values => alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)}
    flowIds={[
      {
        label: 'Flow 1',
        value: '57083780-332d-11e6-8dd4-c88eee4d9f61',
      },
      {
        label: 'Flow 2',
        value: '57083781-332d-11e6-8dd4-c88eee4d9f61',
      },
    ]}
  />
</Store>;
```
