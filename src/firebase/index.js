import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCFTZGtcsxDOkREs_LT8flaYdhIIOkVvyA',
  authDomain: 'devhacks2018.firebaseapp.com',
  databaseURL: 'https://devhacks2018.firebaseio.com',
  projectId: 'devhacks2018',
  storageBucket: 'devhacks2018.appspot.com',
  messagingSenderId: '927064402255'
}

export default firebase.initializeApp(config)
