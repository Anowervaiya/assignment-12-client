import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

import { signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase';


export const ContextAPI = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const SingInUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInOut = () => {
    return signOut(auth);
  };

  const updatedProfile = (name, photo) => {

    return updateProfile(
      auth.currentUser,

      {
        displayName: name,
        photoURL: photo,
      }
    );
  };

  useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, user => {
      setUser(user);
      setLoader(false);
    });

    return () => {
      unsubscrive();
    };
  }, []);

  const GoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };



  const ContextData = {
   
    user,
    createUser,
    GoogleLogin,
    signInOut,
    SingInUser,
    updatedProfile,
   
    loader,
  };

  return (
    <ContextAPI.Provider value={ContextData}>{children}</ContextAPI.Provider>
  );
}

export default AuthProvider;
