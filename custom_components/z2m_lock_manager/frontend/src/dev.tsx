import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MockHass } from './mocks';

const mockHass = new MockHass();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App hass={mockHass as any} />
  </React.StrictMode>,
);
