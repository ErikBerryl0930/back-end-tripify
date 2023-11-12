import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,

    error: false,
  },
  reducers: {
    setCategory(state, action) {
      state.categories = action.payload;
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

export const { setCategory, setLoading, setError } = categorySlice.actions;

export default categorySlice.reducer;
