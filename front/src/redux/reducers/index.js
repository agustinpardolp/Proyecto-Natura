import { combineReducers } from "redux";

import magazineReducer from "./magazineReducer";
import userReducer from "./userReducer";
import productReducer from "./productsReducer";


export default combineReducers({
    magazine: magazineReducer,
    user: userReducer,
    product:productReducer
});