import * as React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

interface IVerticalColumnContextProps {
  onDragEnd: (result: any) => void;
}


export default (props: IVerticalColumnContextProps) =>
  <div className="dnd-game">
    <DragDropContext onDragEnd={props.onDragEnd} {...props} />
  </div>