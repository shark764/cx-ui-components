UnMutedIconSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <UnMutedIconSVG onClick={() => console.log('Clicked')} />
  <StyleGuideSpacerDiv />
  <UnMutedIconSVG onClick={() => {}} size={40} />
  <StyleGuideSpacerDiv />
  <UnMutedIconSVG onClick={() => {}} size={60} />
</div>;
```
