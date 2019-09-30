CloseIconSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <CloseIconSVG onClick={() => console.log('Clicked')} />
  <StyleGuideSpacerDiv />
  <CloseIconSVG onClick={() => {}} size={40} />
  <StyleGuideSpacerDiv />
  <CloseIconSVG onClick={() => {}} size={60} />
  <StyleGuideSpacerDiv />
  <CloseIconSVG closeIconType="primary" onClick={() => {}} size={60} />
  <StyleGuideSpacerDiv />
  <CloseIconSVG closeIconType="secondary" onClick={() => {}} size={60} />
</div>;
```
