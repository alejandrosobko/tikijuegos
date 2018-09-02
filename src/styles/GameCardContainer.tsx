import * as React from 'react';
import { Link } from 'react-router-dom';

interface IGCContainerProps {
  title: string;
}

export default (props: IGCContainerProps) => {
  return (
    <div className="game-card col-xs-3">
      <Link to={`/juegos/${props.title}`} >{props.title}</Link>
    </div>
  )
}

