import { getAuth,signInWithPopup,GoogleAuthProvider  } from 'firebase/auth'
import React,{useContext, useEffect, useState} from 'react'
import  { auth } from '../db/firebase.js'

const AuthContext = React.createContext()

const provider = new GoogleAuthProvider();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout(){
    return auth.signOut();
  }

  function resetPassword(email){
    return auth.sendPasswordResetEmail(email)

  }
  
  function updateEmail(email){
    return auth.updateEmail(email)
  }

  function updatePassword(password){
    return auth.updatePassword(password)
  }

  function handleGoogleLogin(){

    const auth = getAuth();

    signInWithPopup(auth,provider)

    .then((result) => 
    {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;

      if(user!=null)
      {
        return true;
      }

    }).catch((error) => 
    {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;

      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(credential,errorMessage,errorCode,email);
    })
  
  }
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    handleGoogleLogin
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}