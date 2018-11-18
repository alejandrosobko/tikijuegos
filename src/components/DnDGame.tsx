import * as React from 'react';
import GameCard from './GameCard';

interface IGCContainerProps {
  title: string;
  gameId: number;
}

export default (props: IGCContainerProps) => {
  return (
    <GameCard url={`/juegos/arrastrar/${props.gameId}`} title={props.title} />
  )
}

