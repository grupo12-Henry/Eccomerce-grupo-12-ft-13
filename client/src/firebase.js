import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey:'AIzaSyChEGmicshEtY-It3vS6EFwbjKoRlywa_I',
  authDomain: 'auth-development-94247.firebaseapp.com',
  projectId: 'auth-development-94247',
  storageBucket: 'auth-development-94247.appspot.com',
  messagingSenderId: '885431481774',
  appId: '1:885431481774:web:2e75ee3bc123f19211843f'
});

export const auth = app.auth();
export default app;