import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routers from './router/Router';
import initStore from './store/store';

ReactDOM.render(
  <Provider store={initStore}>
    <Routers />
  </Provider>,
  document.getElementById('root')
);
