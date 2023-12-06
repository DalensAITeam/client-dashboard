import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ActionReducer from "./ActionSlice";

export const store = configureStore({
  reducer: {
    actions: ActionReducer,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});