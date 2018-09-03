import * as React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DraggableItem from '../components/drag_and_drop/DraggableItem';
import DroppableResults from '../components/drag_and_drop/DroppableResults';


export interface IVerticalColumnProps {
  column: any;
  items: any[];
  onDragEnd: (result: any) => void;
}

export default class VerticalColumn extends React.Component<IVerticalColumnProps, any> {

  public constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="dnd-game">
        <DragDropContext onDragEnd={this.props.onDragEnd}>
          <Droppable droppableId="column-1">
            {(provided:any) => (
              <DroppableResults provided={provided} innerRef={provided.innerRef}>
                {this.props.items.map((item, index) => <DraggableItem key={item.id} className="box" itemPosition={index} value={item.id} content={item.content} /> )}
                {...provided.droppablePlaceholder}
              </DroppableResults>
            )}
          </Droppable>
        </DragDropContext>
      </div>

    )
  }
}
