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
      <Route exact={true} path="/games" component={GamesList} />
      <Route exact={true} path="/games/1" component={NumbersGame} />
      <Route exact={true} path="/games/2" component={NumbersListGame} />
      <Route exact={true} path="/games/3" component={LetterGame} />
      <Route exact={true} path="/games/4" component={MemotestMcQueen} />
      <Route exact={true} path="/games/5" component={MemotestPocoyo} />
      <Route exact={true} path="/games/6" component={MemotestEmojis} />
      <Route component={NotFound} />
    </Switch>
  </div>
