import * as React from 'react';
import GameCard from 'src/styles/GameCard';

export default (props: any) =>
  <div>
    <h3 className="games-list">Lista de juegos:</h3>
    <GameCard gameId={1} title="Ordenar números"/>
    <GameCard gameId={2} title="Agrupar animales"/>
  </div>
