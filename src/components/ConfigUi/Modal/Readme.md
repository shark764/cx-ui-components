```js
const LoremIpsum = require('../../../utils/LoremIpsum');
initialState = { isModalOpen: false };

<div>
  <Button buttonType="primary" onClick={() => setState({ isModalOpen: true })}>Open modal</Button>
  {state.isModalOpen &&
    <Modal onMaskClick={() => setState({ isModalOpen: false })}>
      <LoremIpsum />
    </Modal>}
</div>
```
