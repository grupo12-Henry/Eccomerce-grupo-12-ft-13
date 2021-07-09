import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCmscd5bzxqA5YCyt0UqBwlBpw7kWCBrXY',
  authDomain: 'login-81951.firebaseapp.com',
  projectId: 'login-81951',
  storageBucket: 'login-81951.appspot.com',
  messagingSenderId: '896879206448',
  appId: '1:896879206448:web:9161dcea8b648d7de18df5'
});

export const auth = app.auth();
export default app;