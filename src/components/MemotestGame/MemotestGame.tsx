import React, { useState } from 'react';
import movementSound from 'src/assets/sounds/memotest-success.wav';
import { shuffleArray } from 'src/utils';
import { playSound } from '../NumbersGame/NumbersGame';
import RestartGame from '../RestartGame';
import MemotestBox from './MemotestBox';

interface IState {
  [key: string]: IStateValue
}

interface IStateValue {
  image: string;
  visible: boolean
}

interface IMemotestGameProps {
  images: string[]
}

const MemotestGame = (props: IMemotestGameProps) => {
  const [elements, setElements] = useState(buildInitialState(props.images))
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
      } else {
        playSound(false, movementSound)
      }

      setFirstElement('')
      setSecondElement('')
    } else {
      setFirstElement(clickedElement)
    }

    if (Object.keys(elements).every((e:string) => elements[e].visible)) {
      setWin(true)
      playSound(true)
    }
  }

  const restartGame = () => {
    setWin(false)
    setFirstElement('')
    setSecondElement('')
    setElements(buildInitialState(props.images))
    setInitialOrderinitialOrder(shuffleArray(Object.keys(elements)))
  }

  return (
    <div className="memotest">
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
