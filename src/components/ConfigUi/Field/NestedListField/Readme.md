```js
const Store = require('../../../../utils/store');
const Form = require('../../../../utils/reduxForm');
const { Map, List } = require('immutable');

// TODO: This component example doesn't drag and drop categories. Should fix it later

<Store>
  <Form
    name="NestedListFieldForm"
    initialValues={Map({ 
        reasons: List([
            Map({
                categoryUUID: '1',
                draggableUUID: '4',
                reasonUUID: 1,
                name: 'reason1',
                contactType: 'normal',
            }),
            Map({
                categoryUUID: '1',
                draggableUUID: '5',
                reasonUUID: 2,
                name: 'reason2',
                contactType: 'more normal',
            }),
            Map({
                categoryUUID: '1',
                draggableUUID: '6',
                reasonUUID: 3,
                name: 'reason3',
                contactType: 'the normalest of all',
            }),
            Map({
                categoryUUID: '2',
                draggableUUID: '7',
                reasonUUID: 4,
                name: 'reason4',
                contactType: 'weird one',
            }),
            Map({
                categoryUUID: '3',
                draggableUUID: '8',
                reasonUUID: 5,
                name: 'reason5',
                contactType: 'weirdest of all',
            }),
        ]) 
    })}>
    <NestedListField
        name="reasons"
        reasonHeaders={List([
            Map({
                name: 'algo',
                hierarchy: List([
                    'categoria1'
                ]),
                categoryUUID: '1',
                droppableUUID: '1'
            }),
            Map({
                name: 'b',
                hierarchy: List([
                    'categoria2'
                ]),
                categoryUUID: '2',
                droppableUUID: '2'
            }),
            Map({
                name: 'c',
                hierarchy: List([
                    'categoria2'
                ]),
                categoryUUID: '3',
                droppableUUID: '3'
            }),
        ])}
        selectedEntityId={'reasons'}
        setSelectedSubEntityId={() => {}}
        userHasUpdatePermission
        removeReasonListItem={() => {}}
        removeCategoryItems={() => {}}
    />
  </Form>
</Store>    

```