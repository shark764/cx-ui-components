import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form/immutable';

function Form(props) {
  return <form onSubmit={props.handleSubmit}>{props.children}</form>;
}

const ReduxFormConstructor = props => {
  const { name, ...otherProps } = props;
  const ReduxForm = reduxForm({
    form: name ? name : 'mockForm',
    onSubmit: values => 
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`),
  })(Form);
  return <ReduxForm {...otherProps} />
} 

export default ReduxFormConstructor;
Form.propTypes = {
  handleSubmit: PropTypes.func,
  children: PropTypes.any,
}
