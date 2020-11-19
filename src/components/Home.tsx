import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import GameImg from '../assets/images/game.png';

export default () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <h2>{t('Welcome')}</h2>
      <h4>{t('Home_t1')}<br/> {t('Home_t2')} 😉</h4>
      <h4 className="sound-msg">{t('Home_t3')}</h4>

      <Link to="/games">
        <div id='lets-play'><span>{t('Play')}</span><img className="home-game-img" src={GameImg} alt=""/></div>
      </Link>
    </div>
  )
}
