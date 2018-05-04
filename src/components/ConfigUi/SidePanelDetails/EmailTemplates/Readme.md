```js
<div>
  Inerhited email:
  <br/><br/>
  <div style={{ border: '1px #e8e8e8 solid', borderRadius: 3, padding: 10 }}>
    <EmailTemplatesDetailsPanel
      userHasUpdatePermission
      emailFormValue="default"
      inheritedSubject="This is the inherited subject"
      inheritedBody="This is the inherited body.\n\nThis is the inherited body.\n\nThis is the inherited body.\n\nThis is the inherited body."
      variables={[]}
    >
      <span>EmailTemplatesForm goes here<br/><br/></span>
    </EmailTemplatesDetailsPanel>
  </div>
  <br/>
  Custom email:
  <br/><br/>
  <div style={{ border: '1px #e8e8e8 solid', borderRadius: 3, padding: 10 }}>
    <EmailTemplatesDetailsPanel
      variables={[
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
      ]}
      userHasUpdatePermission
      emailFormValue="custom"
    >
      EmailTemplatesForm goes here
    </EmailTemplatesDetailsPanel>
  </div>
  <br/>
  Read-only email (no update permission):
  <br/><br/>
  <div style={{ border: '1px #e8e8e8 solid', borderRadius: 3, padding: 10 }}>
    <EmailTemplatesDetailsPanel
      userHasUpdatePermission={false}
      templateEmail="Default"
      templateShared="No"
      templateSubject="This is the template subject"
      templateBody="This is the template body.\n\nThis is the template body.\n\nThis is the template body.\n\nThis is the template body."
      variables={[]}
    >
      Children are not displayed
    </EmailTemplatesDetailsPanel>
  </div>
</div>
```
