import { useContext } from "react"
import { AuthContext } from "../contexts/Auth.context"

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useContext must be used within a AuthProvider')
    }

    const {user, handleForgotPassword, handleSignup, setUser, signOutUser} = context

    return {user, handleForgotPassword, handleSignup, setUser, signOutUser}
}