```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');

<Store>
    <Form>
        <DatePickerField name="datePicker" label="Date Picker"placeholder="Pick a date"/>
        <DatePickerField name="datePicker2" label="Date Picker in a range" minDate={new Date("2014/02/08")} maxDate={new Date("2014/02/10")} />
    </Form>
</Store>
```