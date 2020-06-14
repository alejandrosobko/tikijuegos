import React from 'react';
import NumbersListGame from '../NumbersGame/NumbersListGame';
import { getLetters } from '../utils';

export default () => {
  const INITIAL_DATA = {
    column1: getLetters(5, 1, true),
    column2: getLetters(5, 6, true)
  }

  return (
    <NumbersListGame data={INITIAL_DATA} />
  )
}