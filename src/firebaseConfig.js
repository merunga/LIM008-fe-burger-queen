import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCZujptJoGOy65deGnZS26ZgOkSsj9GNzA',
  authDomain: 'burger-queen-reactive.firebaseapp.com',
  databaseURL: 'https://burger-queen-reactive.firebaseio.com',
  projectId: 'burger-queen-reactive',
  storageBucket: 'burger-queen-reactive.appspot.com',
  messagingSenderId: '299451856705',
};
firebase.initializeApp(config);
export default firebase;
