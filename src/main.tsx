import ReactDOM from 'react-dom';
import { App } from './App';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store, history } from 'store';
import { ConnectedRouter } from 'connected-react-router';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
