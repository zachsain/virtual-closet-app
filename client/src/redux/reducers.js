import { combineReducers } from "redux";
import userReducer from "./userSlice";
import brandsReducer from './brandsSlice'

const rootReducer = combineReducers({
  user: userReducer,
  brands: brandsReducer
});

export default rootReducer;