// import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: localStorage.getItem("token") ? true : false,
        loading: false,
        error: false
    },
    reducers: {
        setLogin(state, action) {
            localStorage.setItem("token", action.payload)
            state.isLogin = true
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