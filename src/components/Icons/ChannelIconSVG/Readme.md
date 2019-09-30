ChannelIconSVG example:

```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <ChannelIconSVG channelType='voice' onClick={() => console.log('Clicked')} />
  <StyleGuideSpacerDiv />
  <ChannelIconSVG channelType='email' channelIconType='in-focus' onClick={() => {}} size={40} />
  <StyleGuideSpacerDiv />
  <ChannelIconSVG channelType='sms' onClick={() => {}} size={60} />
  <StyleGuideSpacerDiv />
  <ChannelIconSVG channelType='messaging' channelIconType='out-of-focus' onClick={() => {}} size={25} />
  <StyleGuideSpacerDiv />
  <ChannelIconSVG channelType='workItem' onClick={() => {}} size={50} />
</div>;
```
