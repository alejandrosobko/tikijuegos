import * as React from 'react';
import { Link } from 'react-router-dom';
import GameImg from '../assets/images/game.png';

export default (props: any) =>
  <div className="home">
    <h2>¡Bienvenido a TikiJuegos!</h2>
    <h4>Un sitio de juegos infantiles sin puntajes ni competencia. <br/> Es gratis y siempre lo será 😉</h4>
    <h4 className="sound-msg">Activa el sonido para una mejor experiencia</h4>

    <Link to="/games">
      <div id='lets-play'><span>Jugar</span><img className="home-game-img" src={GameImg} alt=""/></div>
    </Link>
  </div>