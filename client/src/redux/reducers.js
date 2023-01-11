import { combineReducers } from "redux";
import userReducer from "./userSlice";
import brandsReducer from './brandsSlice'
import stylesSlice from "./stylesSlice";

const rootReducer = combineReducers({
  user: userReducer,
  brands: brandsReducer,
  styles: stylesSlice
});

export default rootReducer;