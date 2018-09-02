import * as React from 'react';
import { Link } from 'react-router-dom';

interface IGCContainerProps {
  title: string;
}

export default (props: IGCContainerProps) => {
  return (
    <div className="game-card">
      <span>
        <Link to={`/${props.title}`} >{props.title}</Link>
      </span>
    </div>
  )
}

