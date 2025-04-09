import ReactDOM from 'react-dom';
import { App } from './App';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
