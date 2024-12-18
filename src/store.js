import { applyMiddleware, combineReducers, createStore } from "redux";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  account: accountReducer,
  customer: combineReducers,
});
export default store;
