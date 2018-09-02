import * as React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DraggableItem from '../components/drag_and_drop/DraggableItem';
import DroppableResults from '../components/drag_and_drop/DroppableResults';


export interface IVerticalColumnProps {
  column: any;
  items: any[];
}

export default class VerticalColumn extends React.Component<IVerticalColumnProps, any> {

  public constructor(props: any) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  public onDragEnd(result: any) {
    alert('drag ends!');
  }

  public render() {
    return (
      <div className="dnd-game">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <h2>Acomoda los números</h2>

          <Droppable droppableId="source">
            {(provided:any) => (
              <DroppableResults provided={provided} innerRef={provided.innerRef}>
                {this.props.items.map((item) => <DraggableItem key={item.id} className="box" value={item.content} /> )}
                {...provided.droppablePlaceholder}
              </DroppableResults>
            )}
          </Droppable>
        </DragDropContext>
      </div>

    )
  }
}
