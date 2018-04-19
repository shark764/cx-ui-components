```js
<div>
  <CheckboxMenu
    items={[
      { name: 'InteractionId', active: true },
      { name: 'Agent', active: true },
      { name: 'CustomerId', active: true },
      { name: 'ContactPoint', active: true },
      { name: 'Flow', active: true },
      { name: 'Channel', active: false },
      { name: 'Direction', active: true },
      { name: 'Presence State', active: false },
      { name: 'Start Date', active: false },
      { name: 'StartTime', active: true },
      { name: 'ElapsedTime', active: true },
      { name: 'Monitoring', active: true },
      { name: 'Groups', active: false },
      { name: 'Skills', active: false },
    ]}
    buttonText="All"
    style={{}}
    menuType="Columns"
    children={[]}
    buttonType="selector"
    selectionType="checkbox"
    setSubMenuVisibility={() => {}}
    currentVisibleSubMenu="something else"
    allActive={false}
    toggleItem={() => {}}
    toggleAllOn={() => {}}
    toggleAllOff={() => {}}
    toggleAllInverse={() => {}}
  >
    Columns
  </CheckboxMenu>
</div>
```
