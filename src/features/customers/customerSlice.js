const initialCustomerState = {
  fullname: "",
  nationId: "",
  created: "",
};

export default function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case "customer/Customercreate":
      return {
        ...state,
        fullname: action.payload.fullname,
        nationId: action.payload.nationId,
        created: action.payload.created,
      };
    case "customer/customerUpate":
      return {
        ...state,
        fullname: action.payload.fullname,
      };

    default:
      return state;
  }
}

export function customerCreate(fullname, nationId) {
  return {
    type: "customer/Customercreate",
    payload: { fullname, nationId, created: new Date().toISOString() },
  };
}

export function customerUpdate(fullname) {
  return {
    type: "customer/customerUpdate",
    payload: { fullname },
  };
}
