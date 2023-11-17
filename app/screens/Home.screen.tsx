import { Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/Auth.context'
import { firestore } from '../../config/firebaseConfig'
import { DocumentData, collection, doc, getDoc, onSnapshot } from 'firebase/firestore'
import { useAuthContext } from '../hooks/useAuthContext'

export const Home = () => {

  const [users, setUsers] = useState<DocumentData[]>([])

  const usersCol = collection(firestore, 'users')

  const {user, signOutUser} = useAuthContext()
  
  // useEffect(() => {
  //   const unsuscribe = onSnapshot(usersCol, (snapshot) => {
  //     setUsers(snapshot.docs.map(doc => doc.data()))
  //   })

  //   return () => unsuscribe()
  // }, [])

  // function load getData
  const loadDataFromDoc = () => {
    getDoc(doc(firestore, 'users', user.uid )).then((doc):void => {
      console.log(doc.data());
    }).catch((error) => {
      console.error(error.message);
    })
  }

  useEffect(() => {
   loadDataFromDoc()
  }, [user])


  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={signOutUser}>
        <Text>SignOut</Text>
        </TouchableOpacity>
        <Text>{user.email}</Text>
        {/* {
          users.map(user => (
            <View key={user.uid}>
              <Text>{user.email}</Text>
              <Text>{user.uid}</Text>
            </View>
          ))
        } */}
        
    </View>
  )
}

