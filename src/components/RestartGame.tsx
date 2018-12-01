import * as React from 'react';

export default (props: any) => {
  if (!props.win) { return null }

  return (
    <div className="you-win">
      <button onClick={props.onRestart}>Jugar de nuevo</button>
    </div>
  )
}
