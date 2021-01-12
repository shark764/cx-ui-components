```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');
const { fromJS } = require('immutable');

<Store>
  <Form
    name="CapacityRulesForm"
    initialValues={
       fromJS({
          capacityRule:{
            voice: false,
            groups: [
              {
                channels: [],
                interactions: 0
              }
            ]
          }
        })
    }
  >
    <CapacityRuleField
      name="capacityRule"
      options={[
        {
          label:'Voice',
          value: 'voice'
        },
        {
          label:'SMS',
          value: 'sms'
        },
        {
          label:'Email',
          value: 'email'
        },
        {
          label:'Messaging',
          value: 'messaging'
        },
        {
          label: 'Work Item',
          value: 'work-item'
        }
      ]}
      messages={{
        selectPlaceholder: 'Please select an option',
        numInteractionsLabel: 'Interactions',
        numInteractionsPlaceholder: 'Enter a number',
        addGroupPopover: 'Add a new group',
        removeGroup: 'Remove Group',
        removeItem: 'Remove Item'
      }}
    />
  </Form>
</Store>
```