'use client'
import { auth } from 'app/germany/firebaseConfig'
import { GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, signInWithPopup } from 'firebase/auth'


export const signInWithGoogle =async () => {
  const provider = new GoogleAuthProvider()
  await provider.setCustomParameters({
    prompt: 'select_account',
  })
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('sign inned')
      console.log(result)
    })
    .catch((error) => {
      console.error('Error Code:', error.code)
      console.error('Error Message:', error.message)
      console.error('Error Stack:', error.stack)
      console.error('Error Details:', error)
    })
}

// Auth State Listener
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log('User signed in:', user)
//   } else {
//     console.log('User is signed out')
//   }
// })
