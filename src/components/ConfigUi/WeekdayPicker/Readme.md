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
    activeDays={state.picker1}
    onClick={handleClick}/>

  <StyleGuideSpacerDiv />

  <WeekdayPicker 
    activeDays={state.picker2} 
    readOnly={true}/>
  
  <StyleGuideSpacerDiv />

</div>;
```