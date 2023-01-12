import { combineReducers } from "redux";
import userReducer from "./userSlice";
import brandsReducer from './brandsSlice'
import pieceSlice from './pieceSlice'
import stylesSlice from "./stylesSlice";

const rootReducer = combineReducers({
  user: userReducer,
  brands: brandsReducer,
  styles: stylesSlice,
  piece: pieceSlice
});

export default rootReducer;