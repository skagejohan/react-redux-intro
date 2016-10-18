import React from 'react';
import reset from './reset.css';
import app from './app.css';
import TopList from './top-list';
import Header from './header';

const topList = [
  { id: 1, name: 'Håkon', weeklyCount: 5, totalCount: 25 },
  { id: 2, name: 'Asbjørn', weeklyCount: 2, totalCount: 18 },
  { id: 3, name: 'Tore', weeklyCount: 11, totalCount: 17 },
  { id: 4, name: 'Skage', weeklyCount: 7, totalCount: 23 },
  { id: 5, name: 'Espen', weeklyCount: 6, totalCount: 42 },
  { id: 6, name: 'Boye', weeklyCount: 4, totalCount: 41 }
].sort((a, b) => b.weeklyCount - a.weeklyCount);

const App = () => {
  return (
    <div className={app.container}>
      <Header title="17.10 - 21.10"/>
      <TopList list={topList}/>
    </div>
  );
}

export default App;
