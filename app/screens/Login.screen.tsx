import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MainContainer } from '../components/MainContainer'
import { InputField } from '../components/InputField'
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import {useForm} from 'react-hook-form'
import { COLORS } from '../../theme';

export const Login = () => {

    const {control, handleSubmit, formState: {errors}} = useForm()

  //  function handleChange(setter: React.Dispatch<React.SetStateAction<string>>){
  //   return function (text:string){
  //       setter(text)
  //   }
  //  }


  //  console.log(errors);
   

   const handleLogin = handleSubmit((data) => {
    // handleSubmit verifies validation before submitting results
    console.log(data);
    console.log(errors);
    
    
   })

  return (
    <MainContainer>
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
      <Pressable onPress={handleLogin}>
        <Text>Sign In</Text>
        </Pressable>
    </MainContainer>
  )
}

const styles = StyleSheet.create({})