import { configureStore } from "@reduxjs/toolkit";
import searchInputReducer from "./searchInput";
import coursesData from "./coursesData";
export default configureStore({
  reducer: {
    searchInput: searchInputReducer,
    coursesData: coursesData,
  },
});
