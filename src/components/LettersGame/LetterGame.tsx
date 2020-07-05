import React from 'react';
import { getLetters } from '../../utils';
import TwoHorizontalColumn from '../drag_and_drop/TwoHorizontalColumn';

export default () => {
  const INITIAL_DATA = {
    column1: getLetters(5, 1, true),
    column2: getLetters(5, 6, true)
  }

  return (
    <TwoHorizontalColumn data={INITIAL_DATA} />
  )
}