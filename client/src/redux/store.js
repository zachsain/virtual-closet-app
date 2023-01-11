import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import brandsReducer from "./brandsSlice"
import rootReducer from "./reducers";

const store = configureStore({
  reducer: {
    user: userReducer,
    brands: brandsReducer
  },
});

export default store;