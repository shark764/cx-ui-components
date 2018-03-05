import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

const rootReducer = combineReducers({
  form,
});

const store = createStore(rootReducer);

function Store(props) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}

export default Store;
