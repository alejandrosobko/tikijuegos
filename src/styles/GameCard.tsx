import * as React from 'react';
import { Link } from 'react-router-dom';

interface IGCContainerProps {
  url: string;
  title: string;
}

export default (props: IGCContainerProps) => {
  return (
    <div className="game-card">
      <Link to={props.url} >{props.title}</Link>
    </div>
  )
}

