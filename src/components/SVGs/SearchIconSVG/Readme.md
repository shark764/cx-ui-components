SearchIconSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <SearchIconSVG onClick={() => console.log('Clicked')} size={25} />
  <StyleGuideSpacerDiv />
  <SearchIconSVG onClick={() => {}} size={40} />
  <StyleGuideSpacerDiv />
  <SearchIconSVG onClick={() => {}} size={60} />
  <StyleGuideSpacerDiv />
  <SearchIconSVG searchIconType="primary" onClick={() => {}} size={60} />
  <StyleGuideSpacerDiv />
  <SearchIconSVG searchIconType="searchBox" onClick={() => {}} size={60} />
</div>;
```
