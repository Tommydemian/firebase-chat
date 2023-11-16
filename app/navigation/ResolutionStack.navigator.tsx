import { useContext } from "react";
import { AuthContext } from "../contexts/Auth.context";
import { RootStacNavigator } from "./RootStack.navigator";
import { AuthStackNavigator } from "./AuthStack.navigator";

export const ResolutionNavigator = () => {
    const context = useContext(AuthContext)
    
    if (!context) {
        throw new Error('useContext must be used within a AuthProvider');
      }

      const { user } = context;

    return (
        user.isLoggedIn ? <RootStacNavigator/> : <AuthStackNavigator />
    )
    
}


