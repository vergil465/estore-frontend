import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../pages/App';
import AppRoute from './AppRoute';
import Home from '../pages/Home';

export default () => (
  <Router autoScrollToTop>
    <div>
      <AppRoute
        exact
        path="/"
        layout={App}
        component={props => (<Home {...props} />)}
      />
    </div>
  </Router>
);
