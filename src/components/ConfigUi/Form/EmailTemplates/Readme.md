```js
const Store = require('../../../../utils/store');
const { Map } = require('immutable');
const { connect } = require('react-redux');
const { reduxForm, submit } = require('redux-form/immutable');
const mapStateToProps = (state) => {
  return {
    email: state.getIn(['form', 'emailTemplates', 'values', 'email']),
  };
};
const EmailTemplatesFormContainer = reduxForm({
  form: 'emailTemplates',
  initialValues: new Map({
    email: 'custom',
    shared: false,
    subject: 'Welcome to CxEngage',
    body: 'Welcome to {{{product-name}}}!\n\nYour username and special one-time login link are below:\n\nUsername: {{{username}}}\n\nLog in automatically by clicking {{{new-user-url}}}\n\nOr login automatically using single sign on by clicking {{{sso-config-login-url}}}\n\nYou\'ll be asked to choose a password when you first log in. Note that the link above will expire after 24 hours and that passwords are case sensitive. If you forget your password or have issues logging in, please contact your system administrator to reset your password or resend your invitation.\n\nThank you, The Serenova Team!'
  }),
})(connect(mapStateToProps)(EmailTemplatesForm));
const onSubmit = values => alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);

let RemoteSubmitButton = ({ dispatch }) => (
  <Button
    buttonType="primary"
    onClick={() => dispatch(submit('emailTemplates'))}
  >
    Submit
  </Button>
);
RemoteSubmitButton = connect()(RemoteSubmitButton);

<Store>
  <div>
    <EmailTemplatesFormContainer
      templates={['product-name', 'username', 'new-user-url', 'sso-config-login-url']}
      onSubmit={onSubmit}
    />
    <RemoteSubmitButton/>
  </div>
</Store>;
```
