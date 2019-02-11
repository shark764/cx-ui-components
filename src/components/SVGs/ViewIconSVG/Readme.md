ViewIconSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <ViewIconSVG onClick={() => console.log('Clicked')} />
  <StyleGuideSpacerDiv />
  <ViewIconSVG onClick={() => {}} size={40} />
  <StyleGuideSpacerDiv />
  <ViewIconSVG onClick={() => {}} size={60} />
  <StyleGuideSpacerDiv />
  <ViewIconSVG viewIconType="primary" onClick={() => {}} size={60} />
  <StyleGuideSpacerDiv />
  <ViewIconSVG viewIconType="secondary" onClick={() => {}} size={60} />
</div>;
```
