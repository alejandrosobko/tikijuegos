import * as React from 'react';
import { Route, Switch } from 'react-router';
import GamesList from './GamesList';
import Home from './Home';
import NotFound from './NotFound';

export default (props: any) =>
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route path="/juegos" component={GamesList} />
    <Route component={NotFound} />
  </Switch>