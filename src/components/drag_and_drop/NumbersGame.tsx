import * as React from 'react';
import initialData from '../../initial-data';
import VerticalColumn from '../../styles/VerticalColumn';

export default class NumbersGame extends React.Component<any, any> {

  public constructor(props: any) {
    super(props);
    this.state = initialData;
  }

  public render() {
    return (
      this.state.columnOrder.map((columnId: string) => {
        const column = this.state.columns[columnId];
        const numbers = column.numberIds.map((numberId: number) => this.state.numbers[numberId]);

        return <VerticalColumn key={column.id} column={column} items={numbers} />
      })

    )
  }

}