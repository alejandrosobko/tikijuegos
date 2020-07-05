import React, { useState } from 'react';
import WidthError from 'src/styles/WidthError';
import { shuffleArray } from 'src/utils';
import Chick from '../../assets/images/memotest/chick.png';
import Doc from '../../assets/images/memotest/doc.png';
import Guido from '../../assets/images/memotest/guido.png';
import Mate from '../../assets/images/memotest/mate.png';
import Ramon from '../../assets/images/memotest/ramon.png';
import Rayo from '../../assets/images/memotest/rayo.png';
import Rey from '../../assets/images/memotest/rey.png';
import Saly from '../../assets/images/memotest/saly.png';
import Storm from '../../assets/images/memotest/storm.png';
import RestartGame from '../RestartGame';
import MemotestBox from './MemotestBox';


interface IState {
  [key: string]: IStateValue
}

interface IStateValue {
  image: string;
  visible: boolean
}

const MemotestGame = () => {
  const images = [Doc, Guido, Mate, Ramon, Rayo, Rey, Saly, Storm, Chick]
  const [elements, setElements] = useState(buildInitialState(images))
  const [initialOrder, setInitialOrderinitialOrder] = useState(shuffleArray(Object.keys(elements)))
  const [firstElement, setFirstElement] = useState('')
  const [secondElement, setSecondElement] = useState('')
  const [win, setWin] = useState(false)

  const handleClick = (event: any) => {
    const clickedElement = event.currentTarget.dataset.id;

    if (secondElement || (elements[clickedElement].visible)) { return }

    elements[clickedElement].visible = true
    if (firstElement) {
      setSecondElement(clickedElement)

      if (firstElement.split('-')[0] !== clickedElement.split('-')[0]) {
        setTimeout(() => {
          const newElements = Object.assign({}, elements)
          newElements[firstElement].visible = false
          newElements[clickedElement].visible = false
          setElements(newElements)
        }, 500);
      }

      setFirstElement('')
      setSecondElement('')
    } else {
      setFirstElement(clickedElement)
    }

    setWin(Object.keys(elements).every((e:string) => elements[e].visible))
  }

  const restartGame = () => {
    setWin(win)
    setFirstElement('')
    setSecondElement('')
    setElements(buildInitialState(images))
    setInitialOrderinitialOrder(shuffleArray(Object.keys(elements)))
  }

  return (
    <div className="memotest">
      <WidthError />
      <RestartGame win={win} onRestart={restartGame} />

      <div>
        {initialOrder.map((name:string) =>
          <MemotestBox key={name} id={name} onClick={handleClick} visible={elements[name].visible} img={elements[name].image} />)
        }
      </div>
    </div>
  )
}


/**
 * Returns a IState object
 * @param images list of image files
 */
function buildInitialState(images: string[]):IState {
  return images.reduce((result, img) => {
    result[`${img.split('media/')[1].split('.')[0]}-1`] = {
      image: img,
      visible: false
    }

    result[`${img.split('media/')[1].split('.')[0]}-2`] = {
      image: img,
      visible: false
    }

    return result
  }, {})
}

export default MemotestGame;
