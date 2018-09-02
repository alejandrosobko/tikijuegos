import * as React from 'react';
import NumbersGame from './NumbersGame';

export default (props: any) =>
  <div className="container">
    <h2>Arrastrar</h2>
    <h4>Arrastrá los objetos usando el mouse o tocando la pantalla táctil, para llevarlos hasta su posición</h4>

    <NumbersGame />
  </div>