import * as React from 'react';
import NotFoundImage from '../assets/images/imagen-404.jpeg'

export default () =>
  <div className="container not-found">
    <span>Error 404</span>
    <h1>Acá no hay juegos!</h1>
    <img src={NotFoundImage} alt="not found" />
  </div>