import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import brandsReducer from "./brandsSlice"
import stylesSlice from "./stylesSlice";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: {
    user: userReducer,
    brands: brandsReducer, 
    styles: stylesSlice
  },
});

export default store;