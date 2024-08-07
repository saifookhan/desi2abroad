import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, goOffline } from 'firebase/database'
import { getMessaging } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyCVwCEWiqqWeZ-MOVy4w72mD6PDxzEjvJ8',
  authDomain: 'desi2abroad-com.firebaseapp.com',
  databaseURL: 'https://desi2abroad-com-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'desi2abroad-com',
  storageBucket: 'desi2abroad-com.appspot.com',
  messagingSenderId: '120248603952',
  appId: '1:120248603952:web:1a7ede86f3c13748d7e4f5',
  measurementId: 'G-8DDJZ8QDD1',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getDatabase(app)
const dbRef = ref(db)
// const messaging = getMessaging(app)

export { db, auth, dbRef, goOffline }
