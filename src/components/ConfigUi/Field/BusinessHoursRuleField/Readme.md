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
        copyAction={() => console.log('copied')}
        deleteAction={() => console.log('deleted')}
        showActions
      />
    </Form>
</Store>
```