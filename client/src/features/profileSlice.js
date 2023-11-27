import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile } from "../api/profile.fetch";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    users: [],
    loading: false,
    error: false,
  },
  reducers: {
    setUser(state, action) {
      state.users = action.payload;
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
