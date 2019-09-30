DirectionIconSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <DirectionIconSVG directionMode="inbound" onClick={() => console.log('Clicked')} />
  <StyleGuideSpacerDiv />
  <DirectionIconSVG directionMode="outbound" onClick={() => {}} size={40} />
  <StyleGuideSpacerDiv />
  <DirectionIconSVG directionMode="agent-initiated" onClick={() => {}} size={60} />
</div>;
```
