import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    isLoggedin: boolean;
}

const initialState: InitialState = {
    isLoggedin: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {

    }
})

export const {} = authSlice.actions

export default authSlice.reducer