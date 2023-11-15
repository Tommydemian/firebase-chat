import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login.screen';
import {Signup} from '../screens/Signup.screen'

const Stack = createNativeStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Signup'>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Signup" component={Signup} options={{headerTitle: 'Create Account'}} />
    </Stack.Navigator>
  );
}