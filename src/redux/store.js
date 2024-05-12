import { combineReducers, createStore, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import productReducer from "./reducers/productReducer";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers ({
    product: productReducer,
    restaurant: restaurantReducer,
    cart: cartReducer,
    
})
//applymiddleware herhangi bir ara yazılımı redux dahil etmeye yarar. biz burada  thunk arayazılımı dahil etmek için kullandık. artık thunk ın  asekron aksiyonlarını yazabileceğiz.
export default createStore(rootReducer, applyMiddleware(thunk));
