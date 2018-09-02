import * as React from 'react';
import NotFoundImage from '../assets/images/imagen-404.jpeg'

export default (props: any) =>
  <div className="container not-found">
    <img src={NotFoundImage} alt="not found" className="col-xs-1"/>
    <h1 className="col-xs-6">No encontramos nada por acá, pero probá usando los links de arriba!</h1>
  </div>