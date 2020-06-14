import React, {useState} from 'react';
import { numbersListInitialData } from 'src/initial-data';

export default function NumbersListGame() {
  const [data, setData] = useState({...numbersListInitialData});
  const [win, setWin] = useState(false);
  const cleanData = () => setData({...numbersListInitialData})
  const makeWinner = () => setWin(true)

  return (
    <div>
      <h1>Hola</h1>
      <h3>La data es: {data}</h3>
      <button onClick={cleanData}>click!</button>
      <h3>Gané? {win}</h3>
      <button onClick={makeWinner}>click!</button>
    </div>
  )

}