import * as React from 'react';
import DraggableListItems from 'src/components/drag_and_drop/DraggableListItems';
import DroppableWrapper from 'src/components/drag_and_drop/DroppableWrapper';
import { IColumnProps, INumberItemProps } from 'src/components/NumbersGame/NumbersGame';


interface IVerticalColumnProps {
  column: IColumnProps;
  items: INumberItemProps[];
}

export default (props: IVerticalColumnProps) =>
  <DroppableWrapper droppableId={props.column.id} className="source">
    <DraggableListItems items={props.items} />
  </DroppableWrapper>
