import React from 'react';
import TwoHorizontalColumn from '../drag_and_drop/TwoHorizontalColumn';
import { getLetters } from '../utils';

export default () => {
  const INITIAL_DATA = {
    column1: getLetters(5, 1, true),
    column2: getLetters(5, 6, true)
  }

  return (
    <TwoHorizontalColumn data={INITIAL_DATA} />
  )
}