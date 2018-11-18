import * as React from 'react';
import DraggableItemWrapper from '../drag_and_drop/DraggableItemWrapper';

interface IDraggableItem {
  className: string;
  value: string;
  itemPosition: number;
  content: string;
}


export default (props: IDraggableItem) => {
  const className = `dnd-number size-${props.value}`;

  return (
    <DraggableItemWrapper draggableId={props.value} index={props.itemPosition} className={className}>
      <div>{props.content}</div>
    </DraggableItemWrapper>
  )
}
