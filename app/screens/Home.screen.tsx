import { Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../contexts/Auth.context'

export const Home = () => {

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

