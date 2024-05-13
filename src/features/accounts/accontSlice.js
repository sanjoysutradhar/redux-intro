const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};
export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      //   if (action.payload < state.balance) return;
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return { ...state, loan: 0, balance: state.balance - state.loan };

    default:
      return state;
  }
}
// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 300 });
// console.log(store.getState());
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a car" },
// });

// console.log(store.getState());
// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());
export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
export function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
export function payLoan() {
  return { type: "account/payLoan" };
}

// store.dispatch(deposit(500));
// store.dispatch(withdraw(300));
// console.log(store.getState());
// store.dispatch(requestLoan(1000, "Buy a car"));
// console.log(store.getState());
// store.dispatch(payLoan());
// console.log(store.getState());
