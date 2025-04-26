import { configureStore } from "@reduxjs/toolkit";
import reducer from "./dataSlice";

const stringMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "string") {
    return dispatch({
      type: action,
    });
  }
  return dispatch(action);
};

const store = configureStore({
  reducer: {
    data: reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
});
export default store;
