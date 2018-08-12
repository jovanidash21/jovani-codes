import React from 'react';
import { Switch } from 'react-router';
import Layout from '../containers/Layout';
import { Home } from '../containers/Home';
import { NotFound } from '../containers/NotFound';

const routes = (
  <div>
    <Switch>
      <Layout exact path="/" component={Home} />
      <Layout path="*" component={NotFound} />
    </Switch>
  </div>
);

export default routes;
