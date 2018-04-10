import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form/immutable';

function Form(props) {
  return <form onSubmit={props.handleSubmit}>{props.children}</form>;
}

export default reduxForm({
  form: 'mockForm',
  onSubmit: values =>
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`),
})(Form);

Form.propTypes = {
  handleSubmit: PropTypes.func,
  children: PropTypes.any,
}
