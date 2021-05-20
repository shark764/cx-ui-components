```js
  initialState = {
    maxValue: 0,
    weight1: 25,
    maxValue1: 4,
    weight2: 5,
    maxValue2: 1,
  };

const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
  function handleOnChange1(e) {
    setState({maxValue1: parseInt(e.target.value, 10)});
  }
<div>
  <p>Max Channel with weight of 0</p>
  <MaxChannelDropdown
    weight={0}
    dropdownValue={state.maxValue}
  />
  <StyleGuideSpacerDiv />
  <MaxChannelDropdown
    weight={state.weight1}
    dropdownValue={state.maxValue1}
    onChange={handleOnChange1}
  />
  <StyleGuideSpacerDiv />
  <MaxChannelDropdown
    weight={state.weight2}
    dropdownValue={state.maxValue2}
    disabled
  />
</div>
```