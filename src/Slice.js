import { createSlice } from "@reduxjs/toolkit";

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    item: null,
    error: null,
  },
  reducers: {
    setProductDetails: (state, action) => {
      state.item = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProductDetails, setError } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
