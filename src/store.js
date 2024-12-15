import { combineReducers, createStore } from "redux";

const rootRedux = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootRedux);

// store.dispatch({ type: "account/deposit", payload: 500 });
// store.dispatch({ type: "account/withdraw", payload: 200 });
// store.dispatch({ type: "account/payLoan" });

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 5000, purpose: "for a car" },
// });
