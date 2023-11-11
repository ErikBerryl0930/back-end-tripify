import { createSlice } from "@reduxjs/toolkit"


const transSlice = createSlice({
    name: "transaction",
    initialState: {
        transactions: [],
        loading: false,
        error: false,

    },
    reducers: {
        setTransaction(state, action) {
            state.transactions = action.payload
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
    setTransaction,
    setLoading,
    setError
} = transSlice.actions


export default transSlice.reducer
