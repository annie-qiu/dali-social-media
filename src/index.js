/* eslint-disable react/function-component-definition */
import './style.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ChakraProvider } from '@chakra-ui/react';
import rootReducer from './reducers';
import Theme from './components/Theme';

import App from './components/App';

const store = configureStore({
  reducer: rootReducer,
});

const root = createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </Provider>,
);
