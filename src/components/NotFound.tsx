import * as React from 'react';
import { useTranslation } from 'react-i18next';
import NotFoundImage from '../assets/images/imagen-404.jpeg';

export default () => {
  const { t } = useTranslation();

  return (
    <div className="container not-found">
      <span>Error 404</span>
      <h1>{t('Not found')}</h1>
      <img src={NotFoundImage} alt="not found" />
    </div>
  )
}