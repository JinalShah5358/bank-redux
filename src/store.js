import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootRedux = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootRedux);
export default store;
