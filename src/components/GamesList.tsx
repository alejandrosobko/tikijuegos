import * as React from 'react';
import DnDGame from './NumbersGame/DnDGame';

export default (props: any) =>
  <div>
    <h3 className="games-list">Lista de juegos:</h3>
    <DnDGame gameId={1} title="Ordenar números"/>
    <DnDGame gameId={2} title="Agrupar animales"/>
  </div>
