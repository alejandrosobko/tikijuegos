import * as React from 'react';
import GameCard from 'src/styles/GameCard';

export default (props: any) =>
  <div>
    <h3 className="games-list">Lista de juegos:</h3>
    <h4>Números</h4>
    <GameCard gameId={1} title="Ordenar en pila"/>
    <GameCard gameId={2} title="Ordenar en de menor a mayor"/>

    <h4>Otros</h4>
    <GameCard gameId={3} title="Agrupar animales"/>
  </div>
