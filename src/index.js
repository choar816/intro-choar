import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

function reducer(currentState, action) {
  const newState = { ...currentState };
  switch (action.type) {
    case 'LANG_TO_KO':
      newState.lang = 'KO';
      break;
    case 'LANG_TO_EN':
      newState.lang = 'EN';
      break;
    case 'DARK':
      newState.dark = true;
      break;
    case 'LIGHT':
      newState.dark = false;
      break;
    default:
      return {
        lang: 'EN',
        dark: false,
      };
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
