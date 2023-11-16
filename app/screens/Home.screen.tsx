import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../config/firebaseConfig'
import { AuthContext } from '../contexts/Auth.context'

export const Home = () => {

  const handleSignOut = () => {
    signOut(auth)
  }

  const context = useContext(AuthContext)
    
    if (!context) {
        throw new Error('useContext must be used within a AuthProvider');
      }

      const { user, setUser } = context;

      useEffect(() =>{
        onAuthStateChanged(auth, firebaseUser => {
          console.log(firebaseUser);
          if (firebaseUser == null) {
            setUser(current => ({...current, isLoggedIn: false}));
          }          
        })
      }, [])


  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>SignOut</Text>
        </TouchableOpacity>
    </View>
  )
}

