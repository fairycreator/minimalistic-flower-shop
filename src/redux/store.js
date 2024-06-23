import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./reducers/productReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)) // Spread middleware array
);

export default store;
