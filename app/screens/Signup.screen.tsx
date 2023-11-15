import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MainContainer } from '../components/MainContainer'
import { InputField } from '../components/InputField'
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import {useForm} from 'react-hook-form'
import { COLORS } from '../../theme';
import { SubmitButton } from '../components/SubmitButton';
import Spinner from 'react-native-loading-spinner-overlay';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth, firestore } from '../../config/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useFonts } from 'expo-font';

type FormData = {
  email: string;
  password: string;
}

export const Signup = () => {

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({email:'', uid: ''})

  const [fontsLoaded] = useFonts({
    RobotoBold: require('../../assets/Roboto-Bold.ttf')
  })

  const navigation = useNavigation()

    const {control, handleSubmit, formState: {errors}} = useForm<FormData>()

  //  function handleChange(setter: React.Dispatch<React.SetStateAction<string>>){
  //   return function (text:string){
  //       setter(text)
  //   }
  //  }

  const usersCol = collection(firestore, 'users')
  const usersDoc = doc(usersCol)


  const handleSignup = handleSubmit((data) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user, 'user from then');
      
      // ...
      setLoading(false)
      navigation.navigate('Login')
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);
      
      // ..
      setLoading(false)
  })
 })

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, user => {
      console.log('user', user?.uid);
      setDoc(usersDoc, {uid: user?.uid, email: user?.email});
      if (user && user.email) {
        setUser({email: user?.email, uid: user?.uid})
      }
    })

    return () => unsuscribe();
  }, [])

  
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'RobotoBold'}}>whatever</Text>
      <Spinner visible={loading}/>
      <InputField
      rules={{required: 'Email is required'}}
      name='email' 
      control={control}
      label='Email'
      placeholder='JonhDoe@gmail.com'
      secureTextEntry={false}
      autoCapitalize='none'
      leftIcon={<MaterialIcons name="email" size={24} color={COLORS.richBlack} />} />
      
      <InputField 
      rules={{required: 'Password is required'}}
      name='password'
      control={control}
      label='Password'
      placeholder='●●●●●●●●'
      secureTextEntry={true}
      autoCapitalize='none'
      leftIcon={<Entypo name="lock" size={24} color={COLORS.richBlack} />} 
      rightIcon={<Entypo name="eye" size={24} color={COLORS.richBlack} />}
        />
      
      <SubmitButton onPress={handleSignup}>
        Sing Up
      </SubmitButton>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%', 
    justifyContent: 'center',
  }
})