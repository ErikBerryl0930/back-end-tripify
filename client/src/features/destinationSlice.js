import { createSlice } from "@reduxjs/toolkit";

const destinationSlice = createSlice({
  name: "destinations",
  initialState: {
    destination: [],
    loading: false,
    error: false,
  },
  reducers: {
    setDestination(state, action) {
      state.destination = action.payload;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setDestination, setLoading, setError } = destinationSlice.actions;

export default destinationSlice.reducer;
