import React, { useState } from 'react';
import Doc from '../../assets/images/memotest/doc.png';
import Guido from '../../assets/images/memotest/guido.png';
import Mate from '../../assets/images/memotest/mate.png';
import Ramon from '../../assets/images/memotest/ramon.png';
import Rayo from '../../assets/images/memotest/rayo.png';
import Rey from '../../assets/images/memotest/rey.png';
import Saly from '../../assets/images/memotest/saly.png';
import Storm from '../../assets/images/memotest/storm.png';
import MemotestBox from './MemotestBox';

const INITIAL_STATE = {
  'Doc-1': false,
  'Doc-2': false,
  'Guido-1': false,
  'Guido-2': false,
  'Mate-1': false,
  'Mate-2': false,
  'Ramon-1': false,
  'Ramon-2': false,
  'Rayo-1': false,
  'Rayo-2': false,
  'Rey-1': false,
  'Rey-2': false,
  'Saly-1': false,
  'Saly-2': false,
  'Storm-1': false,
  'Storm-2': false,
}

export default () => {
  const [firstElement, setFirstElement] = useState('')
  const [elements, setElements] = useState(INITIAL_STATE)

  const handleClick = (event: any) => {
    if (firstElement) {
      let newData = Object.assign({}, elements, {[event.currentTarget.dataset.id]: true})
      setElements(newData)

      if (firstElement.split('-')[0] !== event.currentTarget.dataset.id.split('-')[0]) {
        newData = Object.assign({}, elements, {[event.currentTarget.dataset.id]: false})
        newData[firstElement] = false

        setTimeout(() => {
          setElements(newData)
        }, 500);
      }
      setFirstElement('')
    } else {
      setFirstElement(event.currentTarget.dataset.id)
      const newData = Object.assign({}, elements, {[event.currentTarget.dataset.id]: true})
      setElements(newData)
    }
  }

  return (
    <div className="memotest">
      <div className="row">
        <MemotestBox id='Rayo-1' onClick={handleClick} visible={elements["Rayo-1"]} img={Rayo} />
        <MemotestBox id='Doc-1' onClick={handleClick} visible={elements["Doc-1"]} img={Doc} />
        <MemotestBox id='Guido-1' onClick={handleClick} visible={elements["Guido-1"]} img={Guido} />
        <MemotestBox id='Mate-1' onClick={handleClick} visible={elements["Mate-1"]} img={Mate} />
        <MemotestBox id='Ramon-1' onClick={handleClick} visible={elements["Ramon-1"]} img={Ramon} />
        <MemotestBox id='Rey-1' onClick={handleClick} visible={elements["Rey-1"]} img={Rey} />
        <MemotestBox id='Saly-1' onClick={handleClick} visible={elements["Saly-1"]} img={Saly} />
        <MemotestBox id='Storm-1' onClick={handleClick} visible={elements["Storm-1"]} img={Storm} />
      </div>
      <div className="row">
        <MemotestBox id='Rayo-2' onClick={handleClick} visible={elements["Rayo-2"]} img={Rayo} />
        <MemotestBox id='Doc-2' onClick={handleClick} visible={elements["Doc-2"]} img={Doc} />
        <MemotestBox id='Guido-2' onClick={handleClick} visible={elements["Guido-2"]} img={Guido} />
        <MemotestBox id='Mate-2' onClick={handleClick} visible={elements["Mate-2"]} img={Mate} />
        <MemotestBox id='Ramon-2' onClick={handleClick} visible={elements["Ramon-2"]} img={Ramon} />
        <MemotestBox id='Rey-2' onClick={handleClick} visible={elements["Rey-2"]} img={Rey} />
        <MemotestBox id='Saly-2' onClick={handleClick} visible={elements["Saly-2"]} img={Saly} />
        <MemotestBox id='Storm-2' onClick={handleClick} visible={elements["Storm-2"]} img={Storm} />
      </div>
    </div>
  )
}
