import * as React from 'react';
import DroppableWrapper from 'src/components/drag_and_drop/DroppableWrapper';
import DraggableListItems from 'src/components/NumbersGame/NumberListItems';
import { IColumnProps, INumberItemProps } from 'src/components/NumbersGame/NumbersGame';


export interface IVerticalColumnProps {
  column: IColumnProps;
  items: INumberItemProps[];
}

export default (props: IVerticalColumnProps) =>
  <DroppableWrapper droppableId={props.column.id} className="source">
    <DraggableListItems items={props.items} className='vertical' />
  </DroppableWrapper>
