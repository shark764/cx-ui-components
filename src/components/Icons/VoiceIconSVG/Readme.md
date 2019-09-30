VoiceIconSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <div style={{ backgroundColor: 'black', width: 16 }}>
    <VoiceIconSVG type="default" color="white" />
  </div>
  <StyleGuideSpacerDiv />
  <VoiceIconSVG type="callback" color="blue" />
  <StyleGuideSpacerDiv />
  <VoiceIconSVG type="default" color="blue" />
</div>;
```
