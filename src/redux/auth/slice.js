import { createSlice } from "@reduxjs/toolkit";
import { register } from "./auth-operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, number: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => builder
        .addCase(register.pending, (state, action) => state)
        .addCase(register.fulfilled, (state, action) => state)
        .addCase(register.rejected, (state, action) => state)
});

export const authReducer = authSlice.reducer;