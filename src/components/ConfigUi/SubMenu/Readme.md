```js
const items = [
  { active: true, name: 'filter1' },
  { active: true, name: 'filter2' },
];

<SubMenu
  menuType="menu"
  items={items}
  setSubMenuVisibility={() => console.log('Clicked')}
  currentVisibleSubMenu="not_menu1_as_dont_want_click_mask"
  menuType="menu1"
  allActive={false}
  toggleItem={() => console.log('Clicked')}
  toggleAllOn={() => console.log('Clicked')}
  toggleAllOff={() => console.log('Clicked')}
  toggleAllInverse={() => console.log('Clicked')}
/>;
```