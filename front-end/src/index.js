import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ReminderContextProvider } from './context/ReminderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReminderContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReminderContextProvider>
);

