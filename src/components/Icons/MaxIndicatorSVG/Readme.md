```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  Empty (0):
  <MaxIndicatorSVG size={20} weight={0} />
    <StyleGuideSpacerDiv />

  49 of capacity:
  <MaxIndicatorSVG size={30} weight={49} />
    <StyleGuideSpacerDiv />

  80 of capacity (fullCapacity especified):
  <MaxIndicatorSVG size={40} weight={80} maxCapacity />
    <StyleGuideSpacerDiv />

  Max Capacity:
  <MaxIndicatorSVG size={50} weight={100} />
    <StyleGuideSpacerDiv />
</div>;
```