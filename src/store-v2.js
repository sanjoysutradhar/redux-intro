// import { applyMiddleware, combineReducers, createStore } from "redux";
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accontSlice";
import customerReducer from "./features/customers/customerSlice";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// import { configureStore } from "@reduxjs/toolkit";
// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
export default store;
