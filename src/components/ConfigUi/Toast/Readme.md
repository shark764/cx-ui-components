```js
const StyleGuideSpacerDiv = require('../../../utils/StyleGuideSpacer.js');
function addInfoToast() {
  Toast.info('I am a Info Toast');
}

function addSuccessToast() {
  Toast.success('I am a Success Toast');
}

function addErrorToast() {
  Toast.error('I am a Failure (burnt) Toast');
}

<div>
  <Button type="primary" onClick={() => addInfoToast()}>
    Info!
  </Button>

  <StyleGuideSpacerDiv />

  <Button type="primary" onClick={() => addSuccessToast()}>
    Success!
  </Button>

  <StyleGuideSpacerDiv />

  <Button type="primary" onClick={() => addErrorToast()}>
    Error!
  </Button>
</div>;
```
