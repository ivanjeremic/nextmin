import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import GraphiqlPage from './containers/GraphiqlPage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.GRAPHIQL} component={GraphiqlPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
