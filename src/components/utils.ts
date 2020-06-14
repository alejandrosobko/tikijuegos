/**
 * Generate a list of items
 * @param count amount of items to generate
 * @param offset position to start
 * @param shuffle boolean to indicate if the result should be shuffled
 */
export function getItems(count:number, offset:number, shuffle = false) {
  const result = Array.from({ length: count }, (v, k) => k).map(k => ({id: `${k + offset}`, content: `${k + offset}`}));

  return shuffle ? shuffleArray(result) : result;
}

export function reorder(list:any, startIndex:any, endIndex:any) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


/**
 * Moves an item from one list to another list.
 */
export function move(source:any, destination:any, droppableSource:any, droppableDestination:any) {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  if (droppableSource.droppableId !== droppableDestination.droppableId) {
    if (droppableSource.droppableId === 'column1') {
      const [toSwap] = destClone.splice(0, 1);
      sourceClone.splice(destClone.length, 0, toSwap);
    } else {
      const [toSwap] = destClone.splice(destClone.length - 1, 1);
      sourceClone.splice(0, 0, toSwap);
    }
  }

  const result:any = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

export function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
