import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './style.css';

const rootEl = document.querySelector('[data-js="app"]');

const renderApp = (NextApp) => {
  render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    renderApp(NextApp)
  });
}

import { install, applyUpdate } from 'offline-plugin/runtime';

install({
  onUpdateReady: () => applyUpdate()
});