import { combineReducers } from "redux";

import orderReducers from "./orderReducer";
import userReducer from "./userReducer";
import productReducer from "./productsReducer";


export default combineReducers({
    orders: orderReducers,
    user: userReducer,
    product:productReducer
});