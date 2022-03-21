import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import nftsReducer from "../features/nftsSlice";

export const store = configureStore({
  reducer: {
    nfts: nftsReducer,
  },
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
