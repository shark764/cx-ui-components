```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');

<div 
    style={{
        height: '600px',
    }}>
    <Timepicker
        minutesOnDay={1365}
        hoursStep={2}
        minutesStep={5}
        onChange={(val) => {console.log('val', val)}}
        nullOption
    />
    <StyleGuideSpacerDiv />
</div>
```