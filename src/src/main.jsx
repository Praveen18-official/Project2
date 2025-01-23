import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import React from 'react';

// Polyfills
import process from 'process';
window.global = window;
window.process = process;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
