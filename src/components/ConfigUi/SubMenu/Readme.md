```js
const items = [
  { active: true, name: 'Test case for a long name' },
  { active: true, name: 'filter3', customName: "Test case for a long customName" },
  { active: true, name: 'filter1' },
  { active: true, name: 'filter2' },
  { active: true, name: 'filter3' },
  { active: true, name: 'filter4' },
  { active: true, name: 'filter5' },
  { active: true, name: 'filter6' },
  { active: true, name: 'filter7' },
  { active: true, name: 'filter8' },
  { active: true, name: 'filter9' },
  { active: true, name: 'filter10' },
  { active: true, name: 'filter11' },
  { active: true, name: 'filter12' },
  { active: true, name: 'filter13' },
  { active: true, name: 'filter14' },
  { active: true, name: 'filter15' },
  { active: true, name: 'filter16' },
  { active: true, name: 'filter17' },
  { active: true, name: 'filter18' },
  { active: true, name: 'filter19' },
  { active: true, name: 'filter20' },
  { active: true, name: 'filter21' },
  { active: true, name: 'filter22' },
  { active: true, name: 'filter23' },
  { active: true, name: 'filter24' },
  { active: true, name: 'filter25' },
  { active: true, name: 'filter26' },
  { active: true, name: 'filter27' },
  { active: true, name: 'filter28' },
  { active: true, name: 'filter29' },

];

<div style={{ position: 'relative', height: '500px' }}>
  <SubMenu
    menuType="menu"
    items={items}
    setSubMenuVisibility={() => console.log('Clicked')}
    currentVisibleSubMenu="not_menu1_as_dont_want_click_mask"
    menuType="menu1"
    tableType="Generic Table"
    allActive={false}
    toggleItem={() => console.log('Clicked')}
    toggleAllOn={() => console.log('Clicked')}
    toggleAllOff={() => console.log('Clicked')}
    toggleAllInverse={() => console.log('Clicked')}
  />
</div>
```
