import * as React from 'react';
import initialData from 'src/initial-data';
import ClapsSound from '../assets/sounds/claps.wav';
import MoveSound from '../assets/sounds/move.wav';
import VerticalColumn from '../styles/VerticalColumn';
import NumbersGameContext from './drag_and_drop/NumbersGameContext';


export interface IColumnProps {
  id: string;
  numberIds: string[];
}

export interface INumbersProps {
  [key: string]: INumberItemProps;
}

export interface INumberItemProps {
  id: string;
  content: string;
}

export interface INumbersGameState {
  column: IColumnProps;
  numbers: INumbersProps;
}

export default class NumbersGame extends React.Component<any, INumbersGameState> {

  public constructor(props: any) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);

    this.state = {...initialData};
  }

  public onDragEnd(result: any) {
    const { destination, source, draggableId } = result;

    if (!destination) { return }

    const column = this.state.column;
    const numberIds = Array.from(column.numberIds);
    numberIds.splice(source.index, 1);
    numberIds.splice(destination.index, 0, draggableId);
    const numbers = numberIds.map((numberId: string) => parseInt(this.state.numbers[numberId].content, 10));

    this.playSound(numbers);
    this.updateState(column, numberIds);
  }

  public playSound(numbers: number[]) {
    const sound = isSortedAsc(numbers) ? ClapsSound : MoveSound;
    new Audio(sound).play();
  }

  public render() {
    const numbers = this.state.column.numberIds.map((numberId: string) => this.state.numbers[numberId]);
    return (
      <div>
        <h2>Arrastrar</h2>
        <h3>Ordená las cajas de mayor a menor</h3>
        <NumbersGameContext onDragEnd={this.onDragEnd}>
          <VerticalColumn column={this.state.column} items={numbers} />
        </NumbersGameContext>
      </div>
    )
  }

  private updateState(column: IColumnProps, numberIds: string[]) {
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