import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import routes from './routes';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faMapMarker from '@fortawesome/fontawesome-free-solid/faMapMarker';
import 'react-typist/dist/Typist.css';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

fontawesome.library.add(
  brands,
  faAngleLeft,
  faAngleRight,
  faPhone,
  faEnvelope,
  faMapMarker
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
