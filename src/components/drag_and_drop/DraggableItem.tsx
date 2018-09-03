import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface IDraggableItem {
  className: string;
  value: string;
  itemPosition: number;
  content: string;
}

export default (props: IDraggableItem) =>
  <Draggable draggableId={props.value} index={props.itemPosition}>
    {(provided: any) => (
      <div className="dnd-number"
           ref={provided.innerRef}
           {...provided.draggableProps}
           {...provided.dragHandleProps}>
        <span>{props.content}</span>
      </div>
    )}
  </Draggable>