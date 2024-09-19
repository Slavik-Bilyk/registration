import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser, logIn, logOut, register } from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshihng: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
              
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                    state.isLoggedIn = true;
              
            })
            .addCase(logIn.fulfilled, (state, action) => {
                
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                    state.isLoggedIn = true;
              
            })
            .addCase(logOut.fulfilled, (state, action) => {
                    state.user = {name: null, email: null};
                    state.token = null
                    state.isLoggedIn = false
            })
            .addCase(fetchCurrentUser.pending, (state) => {
                    state.isRefreshihng = true
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                    state.user = action.payload;
                    state.isLoggedIn = true
                    state.isRefreshihng = false
            })
            .addCase(fetchCurrentUser.rejected, (state, payload) => {
                    state.isRefreshihng = false
            })
    },
});

export default authSlice.reducer;
