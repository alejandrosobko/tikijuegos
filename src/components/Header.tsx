import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SpainFlag from '../assets/images/flags/spain-flag.png';
import UsaFlag from '../assets/images/flags/usa-flag.png';

export default () => {
  const { t, i18n } = useTranslation();
  const useES = () => i18n.changeLanguage('es');
  const useEN = () => i18n.changeLanguage('en');

  return (
    <nav className="header">
      <div className="logo"><Link to="/">TikiJuegos</Link></div>
      <div className="right">
        <ul>
          <Link to="/games" ><li>{t('Games')}</li></Link>
        </ul>
        <div className="flags-container">
          <img src={SpainFlag} onClick={useES} title='Español' />
          <img src={UsaFlag} onClick={useEN} title='English' />
        </div>
      </div>
    </nav>
  )
}
