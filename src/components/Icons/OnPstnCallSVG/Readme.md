OnPstnCallSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <OnPstnCallSVG onClick={() => console.log('Clicked')} />
  <StyleGuideSpacerDiv />
  <OnPstnCallSVG onClick={() => console.log('Clicked')} size={35} />
  <StyleGuideSpacerDiv />
  <OnPstnCallSVG onClick={() => console.log('Clicked')} size={45} />
</div>;
```
