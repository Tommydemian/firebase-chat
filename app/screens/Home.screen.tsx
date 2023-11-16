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

      const { signOutUser } = context;

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={signOutUser}>
        <Text>SignOut</Text>
        </TouchableOpacity>
    </View>
  )
}

