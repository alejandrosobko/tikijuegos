import * as React from 'react';
import ClapsSound from '../../assets/sounds/claps.wav';
import MoveSound from '../../assets/sounds/move.wav';
import initialData from '../../initial-data';
import VerticalColumn from '../../styles/VerticalColumn';

export interface INumbersGameProps {
  title: string;
}

export default class NumbersGame extends React.Component<INumbersGameProps, any> {

  public constructor(props: any) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);

    this.state = initialData;
  }

  public onDragEnd(result: any) {
    const { destination, source, draggableId } = result;
    const samePosition = destination === null;

    if (!destination || samePosition) { return; }

    const column = this.state.columns[destination.droppableId];
    const numberIds = Array.from(column.numberIds);
    numberIds.splice(source.index, 1);
    numberIds.splice(destination.index, 0, draggableId);

    const numbers = numberIds.map((numberId: string) => parseInt(this.state.numbers[numberId].content, 10));

    if (isSortedAsc(numbers)) {
      const audio = new Audio(ClapsSound);
      audio.play();
    } else {
      const audio = new Audio(MoveSound);
      audio.play();
    }

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

        return (
          <div key={column.id}>
            <h3>{this.props.title}</h3>
            <VerticalColumn column={column} items={numbers} onDragEnd={this.onDragEnd} />
          </div>
        )
      })

    )
  }

}

function isSortedAsc(list: number[]): boolean {
  return list.every((val: any, i: number, arr: any) => !i || (val >= arr[i - 1]));
}