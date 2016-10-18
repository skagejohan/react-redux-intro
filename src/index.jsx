import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux';
import App from './app';

const topList = [
  { id: 1, name: 'Håkon', weeklyCount: 5, totalCount: 25 },
  { id: 2, name: 'Asbjørn', weeklyCount: 2, totalCount: 18 },
  { id: 3, name: 'Tore', weeklyCount: 11, totalCount: 17 },
  { id: 4, name: 'Skage', weeklyCount: 7, totalCount: 23 },
  { id: 5, name: 'Espen', weeklyCount: 6, totalCount: 42 },
  { id: 6, name: 'Boye', weeklyCount: 4, totalCount: 41 }
].sort((a, b) => b.weeklyCount - a.weeklyCount);

const rootElement = document.getElementById('app');
const store = createStore(reducers, {
  topList: topList
});

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>,
      rootElement
    );
   });
 }
