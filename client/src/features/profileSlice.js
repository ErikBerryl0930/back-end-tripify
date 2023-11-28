import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profiles: [],
    loading: false,
    error: false,
  },
  reducers: {
    setProfile(state, action) {
      state.profiles = action.payload;
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

export const { setProfile, setLoading, setError } = profileSlice.actions;

export default profileSlice.reducer;
