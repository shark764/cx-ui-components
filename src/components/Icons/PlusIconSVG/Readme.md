PlusIconSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <PlusIconSVG onClick={() => console.log('Clicked')} />
  <StyleGuideSpacerDiv />
  <PlusIconSVG onClick={() => {}} size={40} />
  <StyleGuideSpacerDiv />
  <PlusIconSVG onClick={() => {}} size={60} />
  <StyleGuideSpacerDiv />
  <PlusIconSVG plusIconType="primary" onClick={() => {}} size={60} />
  <StyleGuideSpacerDiv />
  <PlusIconSVG plusIconType="secondary" onClick={() => {}} size={60} />
</div>;
```
