import * as React from 'react';
import { Route, Switch } from 'react-router';
import GroupAnimalsGame from './drag_and_drop/GroupAnimalsGame';
import NumbersGame from './drag_and_drop/NumbersGame';
import GamesList from './GamesList';
import Home from './Home';
import NotFound from './NotFound';

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
