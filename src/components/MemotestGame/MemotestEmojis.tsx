import React from 'react';
import Heart from '../../assets/images/memotest/emojis/heart.png';
import HighFive from '../../assets/images/memotest/emojis/high_five.png';
import Joy from '../../assets/images/memotest/emojis/joy.png';
import LadyHacker from '../../assets/images/memotest/emojis/lady_hacker.jpg';
import Mel from '../../assets/images/memotest/emojis/mel.png';
import Mery from '../../assets/images/memotest/emojis/mery.png';
import Popo from '../../assets/images/memotest/emojis/popo.png';
import Smile from '../../assets/images/memotest/emojis/smile.png';
import MemotestGame from './MemotestGame';


export default () =>
  <MemotestGame images={[Mery, Mel, Smile, Popo, Heart, HighFive, LadyHacker, Joy]} />