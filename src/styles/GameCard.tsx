import * as React from 'react';
import { Link } from 'react-router-dom';

interface IGCContainerProps {
  gameId: number;
  title: string;
}

export default (props: IGCContainerProps) => {
  return (
    <div className='game-card'>
      <span>{props.title}</span>
      <Link to={`/juegos/arrastrar/${props.gameId}`} className={`game-number-${props.gameId}`} />
    </div>
  )
}

