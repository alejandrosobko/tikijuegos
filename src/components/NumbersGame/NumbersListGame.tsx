import React, { useState } from 'react';
import HorizontalColumn from 'src/styles/HorizontalColumn';
import NumbersGameContext from '../drag_and_drop/NumbersGameContext';
import RestartGame from '../RestartGame';
import { getItems, move, reorder } from '../utils';
import { isSortedAsc } from './NumbersGame';

const INITIAL_DATA = {
  column1: getItems(5, 1, true),
  column2: getItems(5, 6, true)
}

export default function NumbersListGame() {
  const [data, setData] = useState(INITIAL_DATA);
  const [win, setWin] = useState(false);

  const getColumn = (id: string) => data[id];

  const restartGame = () => {
    setWin(false);
    setData(INITIAL_DATA);
  }

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) { return }

    let newData;

    // dropped inside the same row
    if (source.droppableId === destination.droppableId) {
      const newColumn = reorder(
        getColumn(source.droppableId),
        source.index,
        destination.index
      );

      newData = Object.assign({}, data, {[source.droppableId]: newColumn});
      setData(newData);
    } else {
      newData = move(
        getColumn(source.droppableId),
        getColumn(destination.droppableId),
        source,
        destination
      );

      setData({
        column1: newData.column1,
        column2: newData.column2
      });
    }

    const sorted = isSortedAsc(newData.column1.concat(newData.column2).map((item: any) => item.id));
    setWin(sorted)
  }

  const items1 = data.column1.map((item: any) => item.content)
  const items2 = data.column2.map((item: any) => item.content)
  return (
    <div className='numbers-list-game'>
      <RestartGame win={win} onRestart={restartGame} />

      <NumbersGameContext onDragEnd={onDragEnd}>
        <HorizontalColumn column={{id:'column1', numberIds:items1}} items={data.column1} />
        <HorizontalColumn column={{id:'column2', numberIds:items2}} items={data.column2} />
      </NumbersGameContext>
    </div>
  )

}