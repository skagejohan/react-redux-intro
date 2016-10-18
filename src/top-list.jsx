import React from 'react';
import topList from './top-list.css';

const TopList = ({list}) => {
  const playerItems = list.map((player, index) => (
    <li className={topList.card} key={player.id}>
      <header className={topList['card-header']}>
        <span className={topList['card-number']}>{`${index+1}. `}</span>
        <span>{player.name}</span>
      </header>
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
