import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';

import { App } from './App';
import './index.css';
import { CountProvider } from './contexts/count';
import { store } from './stores/redux';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RecoilRoot>
        <Provider store={store}>
          <CountProvider>
            <App />
          </CountProvider>
        </Provider>
      </RecoilRoot>
    </React.StrictMode>,
  );
}
