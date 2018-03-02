HangUpIconSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <HangUpIconSVG loading onClick={() => console.log('Clicked')} />
  <StyleGuideSpacerDiv />
  <HangUpIconSVG onClick={() => console.log('Clicked')} loading size={40} />
  <StyleGuideSpacerDiv />
  <HangUpIconSVG onClick={() => console.log('Clicked')} />
  <StyleGuideSpacerDiv />
  <HangUpIconSVG onClick={() => console.log('Clicked')} size={40} />
  <StyleGuideSpacerDiv />
  <HangUpIconSVG onClick={() => console.log('Clicked')} size={60} />
</div>;
```
