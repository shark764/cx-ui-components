```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');

initialState = {
  selectedDay: ''
};

const datePickerStyle = {
  color: 'blue',
  width: '200px',
};

function handleClick(e){
  setState({
    selectedDay: e
  });
}

console.log("DatePicker:" , state.selectedDay);

<div>
  <DatePicker
    customStyle={datePickerStyle}
    selectedDay={state.selectedDay}
    onClick={handleClick}
    localeTimeZone="us"
    format="LL"
  />
  <StyleGuideSpacerDiv />
</div>
```