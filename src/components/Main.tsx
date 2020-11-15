import * as React from 'react';
import { Route, Switch } from 'react-router';
import GamesList from './GamesList';
import Home from './Home';
import LetterGame from './LettersGame/LetterGame';
import MemotestEmojis from './MemotestGame/MemotestEmojis';
import MemotestMcQueen from './MemotestGame/MemotestMcQueen';
import MemotestPocoyo from './MemotestGame/MemotestPocoyo';
import NotFound from './NotFound';
import NumbersGame from './NumbersGame/NumbersGame';
import NumbersListGame from './NumbersGame/NumbersListGame';

export default (props: any) =>
  <div className="container">
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/juegos" component={GamesList} />
      <Route exact={true} path="/juegos/arrastrar/1" component={NumbersGame} />
      <Route exact={true} path="/juegos/arrastrar/2" component={NumbersListGame} />
      <Route exact={true} path="/juegos/arrastrar/3" component={LetterGame} />
      <Route exact={true} path="/juegos/arrastrar/4" component={MemotestMcQueen} />
      <Route exact={true} path="/juegos/arrastrar/5" component={MemotestPocoyo} />
      <Route exact={true} path="/juegos/arrastrar/6" component={MemotestEmojis} />
      <Route component={NotFound} />
    </Switch>
  </div>
