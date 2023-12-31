import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "../Slice";

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
  },
});

export default store;
