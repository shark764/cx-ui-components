```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');
const { Map } = require('immutable');

<Store>
    <Form
      initialValues={
        Map({
          rule: {'id': '123', 'name': 'Test'}
        })
      }
    >
      <BusinessHoursRuleField
        name="rule"
        errorObj={
          {
            errorMessage: 'Error....Name is a required field',
            name: true
          }
        }
        cancel={()=>console.log("cancel")}
      />
    </Form>
</Store>
```