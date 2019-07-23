```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');
<Store>
    <Form>
        <TimepickerField name="datePicker" label="Timepicker 24 Hours mode"/>
        <TimepickerField 
            name="datePicker2" 
            label="Timepicker 12 Hours mode" 
            twelveHoursMode 
            nullOption/>
    </Form>
</Store>
```