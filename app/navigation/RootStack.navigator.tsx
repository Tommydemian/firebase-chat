import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home.screen';

const Stack = createNativeStackNavigator();

export const RootStacNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}