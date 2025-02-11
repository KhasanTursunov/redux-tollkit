import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state) => {
        // code...
    },
  },
});

export const { toggleWishlist } = counterSlice.actions;

export default counterSlice.reducer;
