```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');
const { Map } = require('immutable');

<Store>
    <Form
      initialValues={
        Map({
          rule: {'id': '123'}
        })
    }>
      <BusinessHoursRuleField
        name="rule"
        cancel={()=>console.log("cancel")}
      />
    </Form>
</Store>
```