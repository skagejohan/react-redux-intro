import React from 'react';
import reset from './reset.css';
import app from './app.css';
import CurrentTopList from './current-top-list.container';
import Header from './header';

const App = () => {
  return (
    <div className={app.container}>
      <Header title="17.10 - 21.10"/>
      <CurrentTopList />
    </div>
  );
}

export default App;
