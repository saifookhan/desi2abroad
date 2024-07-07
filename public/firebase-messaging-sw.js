importScripts('https://www.gstatic.com/firebasejs/<v9+>/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/<v9+>/firebase-messaging-compat.js')

export const firebaseConfig = {
  apiKey: 'AIzaSyCVwCEWiqqWeZ-MOVy4w72mD6PDxzEjvJ8',
  authDomain: 'desi2abroad-com.firebaseapp.com',
  databaseURL: 'https://desi2abroad-com-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'desi2abroad-com',
  storageBucket: 'desi2abroad-com.appspot.com',
  messagingSenderId: '120248603952',
  appId: '1:120248603952:web:1a7ede86f3c13748d7e4f5',
  measurementId: 'G-8DDJZ8QDD1',
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png',
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
