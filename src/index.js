import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ConnectedRouter } from 'react-router-redux';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import history from './history';
import routes from './routes';
import 'react-typist/dist/Typist.css';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

axios.defaults.baseURL = JOVANI_CODES.siteURL + '/wp-json';

library.add(
  fab,
  far,
  fas,
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
