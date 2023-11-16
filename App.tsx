import { NavigationContainer } from '@react-navigation/native';
import { RootStacNavigator } from './app/navigation/RootStack.navigator';
import { AuthStackNavigator } from './app/navigation/AuthStack.navigator';
import { AuthProvider } from './app/contexts/Auth.context';
import { ResolutionNavigator } from './app/navigation/ResolutionStack.navigator';

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <ResolutionNavigator />
    </NavigationContainer>
    </AuthProvider>
  );
}
