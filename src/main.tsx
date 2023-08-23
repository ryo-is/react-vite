import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import { App } from './App';
import './index.css';
import { store } from './stores/redux';
import { CountProvider } from './contexts/count';

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
