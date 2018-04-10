EditIconSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <EditIconSVG onClick={() => console.log('Clicked')} />
  <StyleGuideSpacerDiv />
  <EditIconSVG onClick={() => {}} size={40} />
  <StyleGuideSpacerDiv />
  <EditIconSVG onClick={() => {}} size={60} />
</div>;
```
