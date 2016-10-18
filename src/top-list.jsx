import React from 'react';
import topList from './top-list.css';

const TopList = ({list}) => {
  const playerItems = list.map((player, index) => (
    <li className={topList.card} key={player.id}>
      <span className={topList['card-header']}><strong>{`${index+1}. `}</strong>{player.name}</span>
      <span className={topList['card-stat']}>{player.weeklyCount}</span>
    </li>
  ))

  return (
    <ul>
      {playerItems}
    </ul>
  )
}

export default TopList;
