import * as React from 'react';
import DnDGame from './drag_and_drop/DnDGame';

export default (props: any) =>
  <div>
    <h2 className="games-list">Lista de juegos:</h2>
    <DnDGame gameId={1} title="Ordenar números"/>
    <DnDGame gameId={2} title="Agrupar animales"/>
  </div>
