```js
initialState = { isModalOpen: false };
const removePopup = () => setState({ isModalOpen: false });
const confirmBtnCallbackFn = () => {
  alert('This works');
  removePopup();
}

<div>
  <Button buttonType="primary" onClick={() => setState({ isModalOpen: true })}>Open modal</Button>
  {state.isModalOpen &&
    <Confirmation
      confirmBtnText="OK"
      confirmBtnCallback={confirmBtnCallbackFn}
      cancelBtnText="cancel"
      cancelBtnCallback={removePopup}
      mainText="Are you sure you want to do this?"
      confirmSubtext="This cannot be undone."
      onMaskClick={removePopup}
    />
  }
</div>
```
