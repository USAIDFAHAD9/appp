import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

//below data shouldnt be published on github or shared anywhere, should be kept secret .!

const firebaseConfig = {
  apiKey: 'AIzaSyDW-SanQSRalt4Jkg2tB5-aULYH5LLzxbc',
  authDomain: 'react-course-f6759.firebaseapp.com',
  projectId: 'react-course-f6759',
  storageBucket: 'react-course-f6759.appspot.com',
  messagingSenderId: '632017714184',
  appId: '1:632017714184:web:b910044e117d15601725bd',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
