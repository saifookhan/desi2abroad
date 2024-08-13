import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase, ref, goOffline } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_Key,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_db_Url,
  projectId: process.env.NEXT_PUBLIC_project_Id,
  storageBucket: process.env.NEXT_PUBLIC_storage_Bucket,
  messagingSenderId: process.env.NEXT_PUBLIC_sender_Id,
  appId: process.env.NEXT_PUBLIC_app_Id,
  measurementId: process.env.NEXT_PUBLIC_measurement_Id,
  signInFlow: 'popup',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestoreDB = getFirestore(app)
const db = getDatabase(app)
const dbRef = ref(db)

export { db, auth, dbRef, goOffline, firestoreDB }
