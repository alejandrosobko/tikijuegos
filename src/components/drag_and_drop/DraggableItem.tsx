import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface IDraggableItem {
  className: string;
  value: number;
}

export default (props: IDraggableItem) =>
  <Draggable draggableId={props.value.toString()} index={props.value}>
    {(provided: any) => (
      <div className="dnd-number"
           ref={provided.innerRef}
           {...provided.draggableProps}
           {...provided.dragHandleProps}>
        <span>{props.value}</span>
      </div>
    )}
  </Draggable>