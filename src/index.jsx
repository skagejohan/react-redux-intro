import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const rootElement = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;

    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      rootElement
    );
   });
 }
