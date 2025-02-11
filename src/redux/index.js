import { configureStore } from "@reduxjs/toolkit";
import counter from './features/count.slice'
export const store = configureStore({
  reducer: {
    counter,
    // wishlist,
    // cart,
    // accessToken,
    // profile
  },
});
