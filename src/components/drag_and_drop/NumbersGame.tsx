import * as React from 'react';
import initialData from '../../initial-data';
import VerticalColumn from '../../styles/VerticalColumn';

export default class NumbersGame extends React.Component<any, any> {

  public constructor(props: any) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);

    this.state = initialData;
  }

  public onDragEnd(result: any) {
    const { destination, source, draggableId } = result;
    const samePosition = destination.droppableId === source.draggableId && destination.index === source.index;

    if (!destination || samePosition) { return; }

    const column = this.state.columns[destination.droppableId];
    const numberIds = Array.from(column.numberIds);
    numberIds.splice(source.index, 1);
    numberIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      numberIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      }
    };

    this.setState(newState);
  }

  public render() {
    return (
      this.state.columnOrder.map((columnId: string) => {
        const column = this.state.columns[columnId];
        const numbers = column.numberIds.map((numberId: number) => this.state.numbers[numberId]);

        return <VerticalColumn key={column.id} column={column} items={numbers} onDragEnd={this.onDragEnd} />
      })

    )
  }

}