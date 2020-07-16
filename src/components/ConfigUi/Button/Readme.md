```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
<div>
  <Button buttonType="primary" onClick={() => alert('Primary Button clicked')}>
    Primary
  </Button>

  <StyleGuideSpacerDiv />

  <Button buttonType="secondary" onClick={() => alert('Secondary Button clicked')}>
    Secondary
  </Button>

  <StyleGuideSpacerDiv />

  <Button buttonType="primary" onClick={() => alert('Primary Button clicked')} disabled>
    Disabled!
  </Button>

  <StyleGuideSpacerDiv />

  <Button buttonType="secondary" onClick={() => alert('Secondary Button clicked')} disabled>
    Disabled!
  </Button>

  <StyleGuideSpacerDiv />

  <Button buttonType="columnFilter" onClick={() => alert('Column Filter clicked')}>
    Column filter button
  </Button>

  <StyleGuideSpacerDiv />

  <Button buttonType="primary" onClick={() => alert('Primary Button clicked')} hyperLink='https://dev-config.cxengagelabs.net/#/'>
    Button with Hyperlink
  </Button>
</div>;
```
