/* eslint-disable react/function-component-definition */
import './style.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ChakraProvider } from '@chakra-ui/react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import rootReducer from './reducers';
import Theme from './components/Theme';

import App from './components/App';

const store = configureStore({
  reducer: rootReducer,
});

const config = {
  apiKey: 'AIzaSyCZ6BmUkgq2TyVxGqGcKfIsd_5pNnuG9iE',
  authDomain: 'dali-net.firebaseapp.com',
  databaseURL: 'https://dali-net-default-rtdb.firebaseio.com',
  projectId: 'dali-net',
  storageBucket: 'dali-net.appspot.com',
  messagingSenderId: '412252563087',
  appId: '1:412252563087:web:3ab6f99e5e2d4290f4f2fa',
  measurementId: 'G-7T2XLH3Z0R',
};

firebase.initializeApp(config);

const root = createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </Provider>,
);
