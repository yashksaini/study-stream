import { createSlice } from "@reduxjs/toolkit";
export const searchInput = createSlice({
  name: "searchInput",
  initialState: {
    text: "",
  },
  reducers: {
    changeSearchInput: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { changeSearchInput } = searchInput.actions;
export default searchInput.reducer;
