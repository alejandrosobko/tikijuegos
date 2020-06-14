import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';

export default (props: any) =>
  <Droppable droppableId={props.droppableId}>
    {(provided: any) => (
       <div className={props.className}
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...provided.droppablePlaceholder}>
          {props.children}
          {provided.placeholder}
        </div>
    )}
  </Droppable>
