import * as React from 'react';
import { useTranslation } from 'react-i18next';
import GameCard from 'src/styles/GameCard';

export default () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="games-list">{t('Games list')}:</h3>
      <GameCard gameId={1} title={t('Sort in stack')}/>
      <GameCard gameId={2} title={t('Lower to higher')}/>
      <GameCard gameId={3} title={t('Sort letters')}/>
      <GameCard gameId={4} title="Memotest Rayo McQueen" />
      <GameCard gameId={5} title="Memotest Pocoyo" />
      <GameCard gameId={6} title="Memotest Emojis" />
    </div>
  )
}
