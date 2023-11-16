import { NavigationContainer } from '@react-navigation/native';
import { RootStacNavigator } from './app/navigation/RootStack.navigator';
import { AuthStackNavigator } from './app/navigation/AuthStack.navigator';
import { AuthProvider } from './app/contexts/Auth.context';

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
    </AuthProvider>
  );
}
