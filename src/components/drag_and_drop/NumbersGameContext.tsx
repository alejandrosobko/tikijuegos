import * as React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

interface IVerticalColumnContextProps {
  onDragEnd: (result: any) => void;
  children: React.ReactNode
}


export default (props: IVerticalColumnContextProps) =>
  <div className="dnd-game">
    <DragDropContext onDragEnd={props.onDragEnd}>
      {props.children}
    </DragDropContext>
  </div>
