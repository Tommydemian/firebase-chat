import { Auth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useState, useEffect } from "react";
import { auth } from "../../config/firebaseConfig";

type AuthProviderProps = {
    children: React.ReactNode
}

type User = {
    email: string;
    uid: string;
    isLoggedIn: boolean;
    loading: boolean;
}

type AuthContextType = {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
    handleSignup: (email: string, password: string, navigation?:any, destination?: string) => void;
    signOutUser: () => void;
  }

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider:React.FC<AuthProviderProps> = ({children}) => {
 const [user, setUser] = useState<User>({email:'', uid: '', isLoggedIn: false, loading: false})

const handleSignup = (email: string, password: string, navigation?: any, destination?: string) => {
    setUser(current => ({...current, loading: true}))
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      console.log(userCredential, 'user from then');

      if (navigation) {
        navigation.navigate(destination)
      }

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);
      
      // ..
      setUser(current => ({...current, loading: false}))
  })
 }

 // handle Signout 
 function signOutUser() {
  signOut(auth)
    .then(() => {
      setUser(current => ({...current, isLoggedIn: false, email: '', uid: ''}));
    })
    .catch((error) => {
      console.error(error);
    });
}

 useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, user => {
      console.log('user', user?.uid);
      setUser(current => ({...current, isLoggedIn: true, email: user?.email || '', loading: false, uid: user?.uid || ''}))
    })

    return () => unsuscribe();
  }, [])

 return(<AuthContext.Provider value={{user, setUser, handleSignup, signOutUser}}>
        {children}
    </AuthContext.Provider>)
}