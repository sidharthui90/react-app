import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AppRouter from './router';
import { store } from './store/configureStore';

const App= () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
