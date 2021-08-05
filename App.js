import React from 'react';
import type {Node} from 'react';
import MainNavigator from './navigation/MainNavigator';
import AuthLogin from './screens/Auth/AuthLogin';
import AuthSignup from './screens/Auth/AuthSignup';
import store from './store/store';
import {Provider} from 'react-redux';

store.subscribe(() => console.log(store.getState()));

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
