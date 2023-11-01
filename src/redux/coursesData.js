import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  let arr = [];
  const q = query(collection(db, "courses"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });
  return arr;
});
export const coursesSlice = createSlice({
  name: "coursesData",
  initialState: {
    data: null,
    status: "Idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "Success";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "Failed";
        console.log(action.error.message);
      });
  },
});

export default coursesSlice.reducer;
