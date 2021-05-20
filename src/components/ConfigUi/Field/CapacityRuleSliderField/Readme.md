```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');
const { fromJS } = require('immutable');

function textFormatter(v) {
  return `${v}%`;
}
<Store>
    <Form
    name="CapacityRulesSliderForm"
    initialValues={
       fromJS({
            rules:  [
            {
                "channels": [
                    "voice"
                ],
                "max": 0,
                "channelMaxCapacity": 1,
                "weight": 80
            },
            {
                "channels": [
                    "email"
                ],
                "max": 0,
                "weight": 0
            },
            {
                "channels": [
                    "messaging"
                ],
                "max": 0,
                "weight": 0
            },
            {
                "channels": [
                    "sms"
                ],
                "max": 2,
                "weight": 49
            },
                        {
                "channels": [
                    "work-item"
                ],
                "max": 0,
                "weight": 0
            }
        ]
        })
    }
    >
    <CapacityRuleSliderField
      name='rules'
      min={0}
      max={100}
      step={1}
      handleLabel
      tooltip
      sliderTooltips={[
        'This is the Voice Channel Tooltip for capacity rules V2',
        'This is the Email Channel Tooltip for capacity rules V2',
        'This is the Messaging Channel Tooltip for capacity rules V2',
        'This is the SMS Channel Tooltip for capacity rules V2',
        'This is the Work-Item Channel Tooltip for capacity rules V2'
        ]}
      sliderTooltipProps={{background:'#9C9C9C', fontColor: '#F8F4F4', width: '500px'}}
      maxChannelDropdownTooltips={[
          'maxChannelDropdown Tooltip 1', 
          'maxChannelDropdown Tooltip 2', 
          'Siuuuuuuu Tooltip 3', 
          '', // Empty string = No tooltip displayed
          'maxChannelDropdown Tooltip 5'
          ]}
      maxChannelDropdownTooltipProps={{background:'#7F7F7F', fontColor: '#ff7e00', width: '200px'}}
      textFormatter={textFormatter}
    />
  </Form>
</Store>
```