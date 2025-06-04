import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/index";

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;
