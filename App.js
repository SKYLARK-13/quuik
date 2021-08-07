import React from 'react';
import type {Node} from 'react';
import SwitchNavigator from './navigation/MainNavigator';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './store/reducers';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middleware);

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <SwitchNavigator />
    </Provider>
  );
};

export default App;
