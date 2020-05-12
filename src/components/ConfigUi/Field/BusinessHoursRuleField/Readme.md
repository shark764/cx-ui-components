```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');
const { Map } = require('immutable');

<Store>
    <Form
      initialValues={
        Map({
          rule:{
                id: 'new-rule',
                startDate: new Date(),
                hours: {
                  allDay: true
                },
                name: ''
              }
        })
      }
    >
      <BusinessHoursRuleField
        name="rule"
        cancel={()=>console.log("cancel")}
        actions={{
          "Copy": () => { console.log('deleted') },
          "Delete": () => { console.log('copied') }
        }}
        showActions
      />
    </Form>
</Store>
```