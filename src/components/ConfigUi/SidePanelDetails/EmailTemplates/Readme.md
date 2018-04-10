```js
const variables = [
  {
    name: "user-first-name",
    description: "The first name of the user, if it is known, otherwise it will insert an empty string",
  },
  {
    name: "user-last-name",
    description: "The last name of the user, if it is known, otherwise it will insert an empty string",
  },
  {
    name: "user-email",
    description: "The user’s email address",
  },
];

<div>
  Inerhited email:
  <br/><br/>
  <div style={{ border: '1px #e8e8e8 solid', borderRadius: 3, padding: 10 }}>
    <EmailTemplatesDetailsPanel
      variables={variables}
      userHasUpdatePermission
      inheritedSubject="This is the inherited subject"
      inheritedBody="This is the inherited body.\n\nThis is the inherited body.\n\nThis is the inherited body.\n\nThis is the inherited body."
    >
      <span>EmailTemplatesForm goes here<br/><br/></span>
    </EmailTemplatesDetailsPanel>
  </div>
  <br/>
  Custom email:
  <br/><br/>
  <div style={{ border: '1px #e8e8e8 solid', borderRadius: 3, padding: 10 }}>
    <EmailTemplatesDetailsPanel
      variables={variables}
      userHasUpdatePermission
      email="custom"
    >
      EmailTemplatesForm goes here
    </EmailTemplatesDetailsPanel>
  </div>
</div>
```
