import * as React from 'react';
import DroppableWrapper from 'src/components/drag_and_drop/DroppableWrapper';
import DraggableListItems from 'src/components/NumbersGame/NumberListItems';
import { IVerticalColumnProps } from './VerticalColumn';


export default (props: IVerticalColumnProps) =>
  <DroppableWrapper droppableId={props.column.id} className="source" direction='horizontal' >
    <DraggableListItems items={props.items} className='horizontal' />
  </DroppableWrapper>
