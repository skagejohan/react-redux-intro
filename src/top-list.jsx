import React from 'react';

const TopList = ({list}) => {
  const playerItems = list.map(player => (
    <li key={player.id}>
      <header>{player.name}</header>
      <p>Weekly: {player.weeklyCount}</p>
      <p>Total: {player.totalCount}</p>
    </li>
  ))

  return (
    <ul>
      {playerItems}
    </ul>
  )
}

export default TopList;
