import { NavigationContainer } from '@react-navigation/native';
import { RootStacNavigator } from './app/navigation/RootStack.navigator';
import { AuthStackNavigator } from './app/navigation/AuthStack.navigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}
