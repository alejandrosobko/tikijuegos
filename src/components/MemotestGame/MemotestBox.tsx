import React from 'react';
import HiddenCard from '../../assets/images/memotest/hidden-card.png';

interface IMemotestBoxProps {
  img: string;
  visible: boolean;
  id: string;
  onClick: (event:any) => void;
}

export default (props: IMemotestBoxProps) =>
  <div className="memotest-box col-md-2" onClick={props.onClick} data-id={props.id}>
    <img src={HiddenCard} className={props.visible ? 'hide' : ''} alt=""/>
    <img src={props.img} className={props.visible ? '' : 'hide'} alt=""/>
  </div>
