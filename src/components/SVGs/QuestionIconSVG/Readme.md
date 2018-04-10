QuestionIconSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <QuestionIconSVG onClick={() => console.log('Clicked')} />
  <StyleGuideSpacerDiv />
  <QuestionIconSVG onClick={() => {}} size={40} />
  <StyleGuideSpacerDiv />
  <QuestionIconSVG onClick={() => {}} size={60} />
</div>;
```
