import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { Store } from '../reducers/types';
import Routes from '../Routes';
import { AppContextProvider } from '../contexts/AppContext';

type Props = {
  store: Store;
  history: History;
};

const Root = ({ store, history }: Props) => (
  <Provider store={store}>
    <AppContextProvider>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </AppContextProvider>
  </Provider>
);

export default hot(Root);
