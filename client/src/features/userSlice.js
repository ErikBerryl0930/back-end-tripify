import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getUsers } from "../api/user.fetch"

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: false,

    },
    reducers: {
        setUser(state, action) {
            state.users = action.payload
            state.loading = false
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
    setUser,
    setLoading,
    setError
} = userSlice.actions


export default userSlice.reducer


