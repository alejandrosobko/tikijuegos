import * as React from 'react';
import { Route, Switch } from 'react-router';
import DragAndDropGames from './drag_and_drop/DragAndDropGames';
import GamesList from './GamesList';
import Home from './Home';
import NotFound from './NotFound';

export default (props: any) =>
  <div className="container">
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/juegos" component={GamesList} />
      <Route exact={true} path="/juegos/arrastrar" component={DragAndDropGames} />
      <Route component={NotFound} />
    </Switch>
  </div>
