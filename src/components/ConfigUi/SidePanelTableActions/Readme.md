```js
<div>
  <SidePanelTableActions
    row={{ key: 'Row 1' }}
    updateSubEntity={() => alert('updateSubEntity')}
    deleteSubEntity={() => alert('deleteSubEntity')}
  />
  <br/><br/>
  <SidePanelTableActions
    row={{ key: 'Deleting row', deleting: true }}
    updateSubEntity={() => alert('updateSubEntity')}
    deleteSubEntity={() => alert('deleteSubEntity')}
  />
</div>
```
