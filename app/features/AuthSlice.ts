import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../config/firebaseConfig";
import { Auth } from "firebase/auth";

type InitialState = {
    loading: boolean
    isLoggedin: boolean;
}

const initialState: InitialState = {
    loading: false,
    isLoggedin: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {
      signup: (state, action<PayloadAction<Auth, string, string>>) => {

      }
    }
})

export const {} = authSlice.actions

export default authSlice.reducer