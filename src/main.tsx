import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import { App } from './App';
import './index.css';
import { CountProvider } from './contexts/count';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RecoilRoot>
        <CountProvider>
          <App />
        </CountProvider>
      </RecoilRoot>
    </React.StrictMode>,
  );
}
