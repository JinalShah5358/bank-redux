import { createSlice } from "@reduxjs/toolkit";
import reducer from "../accounts/accountSlice";

const initialCustomerState = {
  fullname: "",
  nationId: "",
  created: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialCustomerState,
  reducers: {
    customerCreate: {
      prepare(fullname, nationId) {
        return { payload: { fullname, nationId } };
      },
      reducer(state, action) {
        state.fullname = action.payload.fullname;
        state.nationId = action.payload.nationId;
        state.created = new Date().toISOString();
      },
    },
    customerUpate(state, action) {
      state.fullname = action.payload;
    },
  },
});

export const { customerCreate, customerUpate } = customerSlice.actions;

export default customerSlice.reducer;

// export default function customerReducer(state = initialCustomerState, action) {
//   switch (action.type) {
//     case "customer/Customercreate":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//         nationId: action.payload.nationId,
//         created: action.payload.created,
//       };
//     case "customer/customerUpate":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//       };

//     default:
//       return state;
//   }
// }

// export function customerCreate(fullname, nationId) {
//   console.log("running");
//   return {
//     type: "customer/Customercreate",
//     payload: { fullname, nationId, created: new Date().toISOString() },
//   };
// }

// export function customerUpdate(fullname) {
//   return {
//     type: "customer/customerUpdate",
//     payload: { fullname },
//   };
// }
