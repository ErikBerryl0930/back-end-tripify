import { createSlice } from '@reduxjs/toolkit';
import Swal from "sweetalert2";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user : "",
        isLogin: localStorage.getItem("token") ? true : false,
        loading: false,
        error: false
    },
    reducers: {
        setLogin(state, action) {
            localStorage.setItem("token", action.payload)
            state.isLogin = true
        },
        setUser(state,action){
            state.user = action.payload
            state.loading = false
        },
        setLogout(state) {
            localStorage.clear()
            state.isLogin = false
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
        setError(state, action) {
            state.error = action.payload
            state.loading = false
        }
    }
})

export const {
    setLoading,
    setError,
    setLogin,
    setLogout,
} = authSlice.actions

export default authSlice.reducer