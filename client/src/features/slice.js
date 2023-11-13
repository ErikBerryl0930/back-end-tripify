import { createSlice } from "@reduxjs/toolkit";

const destinationSlice = createSlice({
  name: "dest",
  initialState: {
    destinations: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    setDesntiation(state, action) {
      (state.destinations = action.payload), (state.isLoading = false);
    },

    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.isError = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setDesntiation, setError, setLoading } =
  destinationSlice.actions;

export default destinationSlice.reducer;
