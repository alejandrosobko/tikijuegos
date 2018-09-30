import * as React from 'react';
import ClapsSound from '../../assets/sounds/claps.wav';
import MoveSound from '../../assets/sounds/move.wav';
import VerticalColumn from '../../styles/VerticalColumn';


export default class NumbersGame extends React.Component<any, any> {

  public constructor(props: any) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);

    this.state = {
      column: {
        id: 'column-1',
        numberIds: ['four', 'one', 'five', 'three', 'two'],
      },
      numbers: {
        'five': { id: 'five', content: '5' },
        'four': { id: 'four', content: '4' },
        'one': { id: 'one', content: '1' },
        'three': { id: 'three', content: '3' },
        'two': { id: 'two', content: '2' },
      },
    };
  }

  public onDragEnd(result: any) {
    const { destination, source, draggableId } = result;
    const samePosition = destination === null;
    const column = this.state.column;
    const numberIds = Array.from(column.numberIds);
    numberIds.splice(source.index, 1);
    numberIds.splice(destination.index, 0, draggableId);
    const numbers = numberIds.map((numberId: string) => parseInt(this.state.numbers[numberId].content, 10));

    if (!destination || samePosition) { return; }

    this.playSound(numbers);
    this.updateState(column, numberIds);
  }

  public playSound(numbers: any) {
    if (isSortedAsc(numbers)) {
      const audio = new Audio(ClapsSound);
      audio.play();
    } else {
      const audio = new Audio(MoveSound);
      audio.play();
    }
  }

  public render() {
    const numbers = this.state.column.numberIds.map((numberId: number) => this.state.numbers[numberId]);
    return (
      <div key={this.state.column.id}>
        <h2>Arrastrar</h2>
        <h3>Ordená las cajas de mayor a menor</h3>
        <VerticalColumn column={this.state.column} items={numbers} onDragEnd={this.onDragEnd} />
      </div>
    )
  }

  private updateState(column: any, numberIds:any) {
    const newColumn = {
      ...column,
      numberIds
    };

    this.setState({
      ...this.state,
      column: newColumn
    });
  }

}

function isSortedAsc(list: number[]): boolean {
  return list.every((val: any, i: number, arr: any) => !i || (val >= arr[i - 1]));
}