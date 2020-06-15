import * as React from 'react';
import { useState } from 'react';


export default () => {
  const [hideMsg, setHideMsg] = useState(window.innerWidth > window.innerHeight)
  const updateWidth = () => setHideMsg(window.innerWidth > window.innerHeight)

  React.useLayoutEffect(() => {
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  })
  const hideMessage = () => setHideMsg(true);

  return (
    <div className={hideMsg ? 'hide' : 'widthError'}>
      <span className='hideMsg' onClick={hideMessage}>X</span>
      <div>
        <h5>Gira la pantalla para una mejor experiencia de juego</h5>
      </div>
    </div>
  )
}
