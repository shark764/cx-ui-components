RefreshIconSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <RefreshIconSVG onClick={() => console.log('Clicked')} size={30} title="title 1"/>
  <StyleGuideSpacerDiv />
  <RefreshIconSVG onClick={() => console.log('Clicked')} size={30} title="title 2"/>
  <StyleGuideSpacerDiv />
  <RefreshIconSVG onClick={() => console.log('Clicked')} size={30} title="title 3" />
</div>;
```
