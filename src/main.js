import { jsx as _jsx } from 'react/jsx-runtime';
import ReactDOM from 'react-dom';
import App from './App';
import { StrictMode } from 'react';
ReactDOM.render(
  _jsx(StrictMode, { children: _jsx(App, {}) }),
  document.getElementById('root')
);
