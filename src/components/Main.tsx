import * as React from 'react';
import { Route, Switch } from 'react-router';
import GamesList from './GamesList';
import GroupAnimalsGame from './GroupAnimalsGame';
import Home from './Home';
import NotFound from './NotFound';
import NumbersGame from './NumbersGame';

export default (props: any) =>
  <div className="container">
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/juegos" component={GamesList} />
      <Route exact={true} path="/juegos/arrastrar/1" component={NumbersGame} />
      <Route exact={true} path="/juegos/arrastrar/2" component={GroupAnimalsGame} />
      <Route component={NotFound} />
    </Switch>
  </div>
