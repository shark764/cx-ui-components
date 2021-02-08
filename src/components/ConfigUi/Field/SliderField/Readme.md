```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');
const { fromJS } = require('immutable');

function textFormatter(v) {
  return `${v}%`;
}

<Store>
    <Form
      name="CapacityRulesSliders"
      initialValues={
       fromJS({
        sliderOne: 50,
        sliderTwo: 30
        })
      }
    >
    <label>Slider Field with default label with helper</label>
    <br />
    <br />
    <SliderField
      name="sliderOne"
      labelField={'Messaging'}
      labelHelpText={'(max 5)'}
      min={0}
      max={100}
      handleLabel
      step={25}
      tooltip
      textFormatter={textFormatter}
    />
    <br />
    <br />
    <label>Slider Field with custom component label with helper</label>
    <br />
    <br />
    <SliderField
      name="sliderTwo"
      label={'Messaging'}
      subLabel={`(max ${4})`}
      min={0}
      max={100}
      handleLabel
      step={10}
      textFormatter={textFormatter}
    />
  </Form>
</Store>
```