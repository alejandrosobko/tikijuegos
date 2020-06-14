import * as React from 'react';
import { numbersListInitialData } from 'src/initial-data';

export default class NumbersListGame extends React.Component<any, any> {

  public constructor(props: any) {
    super(props);

    this.state = { ...numbersListInitialData, win: false};
  }

  public render() {
    return (
      <h1>Hola</h1>
    )
  }

}