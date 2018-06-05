```js
const item = {
  active: true,
  channelType: 'voice',
  created: '2018-05-30T16:03:49Z',
  createdBy: '96cd5320-8001-11e6-98e4-ca81484488df',
  description: "This ANI should make a call appear as if it's coming from my qe tenant 15063001197",
  flowId: '9c6423b0-88eb-11e7-b018-9a5ac3da6edd',
  id: '0aa30950-6423-11e8-8275-61b993dc828d',
  name: 'QE ENV Identifier',
  tenantId: 'fd172219-c5ee-45ab-9c18-31b9e8c59920',
  updated: '2018-05-30T16:03:49Z',
  updatedBy: '96cd5320-8001-11e6-98e4-ca81484488df',
  value: '+15063001197',
};
<div>
  Read Only:
  <br />
  <br />
  <div style={{ border: '1px #e8e8e8 solid', borderRadius: 3, padding: 10 }}>
    <OutboundIdentifiersDetailsPanel
      item={item}
      id="componentId"
      className="componentClassName"
      userHasUpdatePermission={false}
    >
      You should not see this update form
    </OutboundIdentifiersDetailsPanel>
  </div>
  <br />
  <br />
  Update permissions granted:
  <br />
  <br />
  <div style={{ border: '1px #e8e8e8 solid', borderRadius: 3, padding: 10 }}>
    <OutboundIdentifiersDetailsPanel
      item={item}
      id="componentId"
      className="componentClassName"
      userHasUpdatePermission={true}
    >
      Update form goes here
    </OutboundIdentifiersDetailsPanel>
  </div>
</div>;
```
