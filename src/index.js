import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      language: 'EN',
    };
  }

  const newState = { ...currentState };
  if (action.type === 'LANG_TO_KO') {
    newState.language = 'KO';
  } else if (action.type === 'LANG_TO_EN') {
    newState.language = 'EN';
  }
  return newState;
}
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
