import * as React from 'react';
import GameCard from 'src/styles/GameCard';

export default (props: any) =>
  <div>
    <h3 className="games-list">Lista de juegos:</h3>
    <GameCard gameId={1} title="Ordenar en pila"/>
    <GameCard gameId={2} title="Menor a mayor"/>
    <GameCard gameId={3} title="Ordenar letras"/>
    <GameCard gameId={4} title="Memotest Rayo McQueen" subtitle="(16 fichas)" />
    <GameCard gameId={5} title="Memotest Pocoyo" subtitle="(10 fichas)" />
  </div>
