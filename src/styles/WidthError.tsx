import * as React from 'react';
import { useState } from 'react';


export default () => {
  const [width, setWidth] = useState(window.innerWidth)
  const updateWidth = () => setWidth(window.innerWidth)
  React.useLayoutEffect(() => {
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  })

  return (
    <div className={width < window.innerHeight ? 'widthError' : 'hide'}>
      <h1>Gira la pantalla para una mejor experiencia de juego</h1>
    </div>
  )
}
