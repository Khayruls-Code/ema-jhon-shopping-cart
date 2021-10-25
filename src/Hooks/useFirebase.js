import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, FacebookAuthProvider, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()


const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //google singIn
  const singInByGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  //facebook SingIn
  const singInByFacebook = () => {
    return signInWithPopup(auth, facebookProvider)
  }

  //create new user by email/password
  const createUserByPassword = () => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const updateUserProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleName = (e) => {
    setName(e.target.value)
  }

  //getting current user

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
        console.log(user)
      }
    })
  }, [])

  //sing out

  const singOutUser = () => {
    signOut(auth)
      .then(() => setUser({}))
      .catch(error => setError(error.message))
  }

  return {
    user,
    error,
    singInByGoogle,
    singInByFacebook,
    singOutUser,
    handleEmail,
    handleName,
    updateUserProfile,
    handlePassword,
    createUserByPassword,
  }

}


export default useFirebase;