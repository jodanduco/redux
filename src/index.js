import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/app';
import reducers from './reducers';

const enhacers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const createStoreWithMiddleware = applyMiddleware()(createStore, enhacers);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
