import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { MainContainer } from '../components/MainContainer'
import { InputField } from '../components/InputField'
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import {useForm} from 'react-hook-form'
import { COLORS } from '../../theme';
import { SubmitButton } from '../components/SubmitButton';
import Spinner from 'react-native-loading-spinner-overlay';
import { auth, firestore } from '../../config/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { collection, doc, setDoc } from 'firebase/firestore';
import { AuthProvider, AuthContext } from '../contexts/Auth.context';
import { signOut } from 'firebase/auth';

type FormData = {
  email: string;
  password: string;
}

export const Signup = () => {

const context = useContext(AuthContext);

if (!context) {
  throw new Error('useContext must be used within a AuthProvider');
}

const { user, handleSignup } = context;

  const navigation = useNavigation()

    const {control, handleSubmit, formState: {errors}} = useForm<FormData>()

  const usersCol = collection(firestore, 'users')
  const usersDoc = doc(usersCol)


  const onSubmit = handleSubmit((data) => {
    handleSignup( data.email, data.password, navigation, 'Login' )
  })

  return (
    <View style={styles.container}>
      <Text>whatever</Text>
      <Spinner visible={user.loading}/>
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
      
      <SubmitButton onPress={onSubmit}>
        Sing Up
      </SubmitButton>

      <SubmitButton onPress={() => signOut(auth)}>
        sign out
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