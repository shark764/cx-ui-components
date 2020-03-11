```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');

initialState = {
  picker1: ['sunday'],
  picker2: ['monday', 'thursday']
};

function handleClick(e){
  console.log(e);
  setState({
    picker1: e
  });
}

<div>
  <WeekdayPicker
    id={"123"}
    activeDays={state.picker1}
    onClick={handleClick}
  />

  <StyleGuideSpacerDiv />

  <WeekdayPicker
    id={"456"}
    activeDays={state.picker2}
    onClick={handleClick}
    readOnly
  />
  
  <StyleGuideSpacerDiv />

</div>;
```