import { createSlice } from "@reduxjs/toolkit";

const destinationSlice = createSlice({
  name: "dest",
  initialState: {
    destinations: [],
    destination: "",
    isLoading: false,
    isError: false,
  },
  reducers: {
    setDestinations(state, action) {
      (state.destinations = action.payload), (state.isLoading = false);
    },
    setDestination(state, action) {
      state.destination = action.payload
      state.isLoading = false
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

export const { setDestinations, setDestination, setError, setLoading } =
  destinationSlice.actions;

export default destinationSlice.reducer;
