import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';

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

const app = firebase.initializeApp(config);
const auth = getAuth(app);
export { app, auth };
