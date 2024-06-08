import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Correct import
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Correct usage
);

export default store;
