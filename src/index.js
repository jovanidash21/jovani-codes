import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import routes from './routes';
import 'react-typist/dist/Typist.css';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
