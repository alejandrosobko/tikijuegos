import * as React from 'react';
import NumberBox from '../NumbersGame/NumberBox';
import { INumberItemProps } from '../NumbersGame/NumbersGame';

interface IDraggableListItems {
  items: INumberItemProps[]
}

export default (props: IDraggableListItems) =>
  <div> {props.items.map(toNumberBox)} </div>


function toNumberBox(item: INumberItemProps, position: number) {
  return <NumberBox key={item.id} className="box" itemPosition={position} value={item.id} content={item.content} />
}