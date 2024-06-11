import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./reducers/productReducer";
import authReducer from "./reducers/authReducer"; // Add authReducer

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer, // Add auth to root reducer
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
