import * as React from 'react';
import NumberBox from './NumberBox';
import { INumberItemProps } from './NumbersGame';

interface IDraggableListItems {
  items: INumberItemProps[];
  className: string;
}

export default (props: IDraggableListItems) =>
  <div className={props.className}> {props.items.map(toNumberBox)} </div>


function toNumberBox(item: INumberItemProps, position: number) {
  return <NumberBox key={item.id} className="box" itemPosition={position} value={item.id} content={item.content} />
}