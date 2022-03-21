import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import nftsReducer from "../features/nftsSlice";

// this is the store for the Redux Toolkit, binding the nfts you get with the their reducer
export const store = configureStore({
  reducer: {
    nfts: nftsReducer,
  },
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
