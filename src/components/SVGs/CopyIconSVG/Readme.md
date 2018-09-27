CopyIconSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <CopyIconSVG onClick={() => console.log('Clicked')} />
  <StyleGuideSpacerDiv />
  <CopyIconSVG onClick={() => {}} size={40} />
  <StyleGuideSpacerDiv />
  <CopyIconSVG onClick={() => {}} size={60} />
  <StyleGuideSpacerDiv />
  <CopyIconSVG copyIconType="primary" onClick={() => {}} size={60} />
  <StyleGuideSpacerDiv />
  <CopyIconSVG copyIconType="secondary" onClick={() => {}} size={60} />
</div>;
```
