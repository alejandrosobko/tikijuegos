import * as React from 'react';
import { Link } from 'react-router-dom';
import GameImg from '../assets/images/game.png';

export default (props: any) =>
  <div>
    <h2>¡Bienvenido a TikiJuegos!</h2>
    <h4>Un sitio gratis de juegos infantiles sin puntajes ni competencia</h4>

    <Link to="/juegos">
      <div id='lets-play'><span>Jugar</span><img className="home-game-img" src={GameImg} alt=""/></div>
    </Link>
  </div>