import * as React from 'react';
import { Link } from 'react-router-dom';

export default (props: any) =>
  <nav className="header">
    <div className="logo"><Link to="/">TikiJuegos</Link></div>
    <div className="links">
      <ul>
        <Link to="/juegos" ><li>Juegos</li></Link>
      </ul>
    </div>
  </nav>