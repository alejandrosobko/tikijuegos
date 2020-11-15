import * as React from 'react';
import { Link } from 'react-router-dom';

interface IGCContainerProps {
  gameId: number;
  title: string;
}

export default (props: IGCContainerProps) => {
  return (
    <div className='game-card'>
      <Link to={`/games/${props.gameId}`} className={`game-number-${props.gameId}`} />
      <span>{props.title}</span>
    </div>
  )
}

