MutedIconSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <MutedIconSVG onClick={() => console.log('Clicked')} />
  <StyleGuideSpacerDiv />
  <MutedIconSVG onClick={() => console.log('Clicked')} size={40} />
  <StyleGuideSpacerDiv />
  <MutedIconSVG onClick={() => console.log('Clicked')} size={60} />
</div>;
```
