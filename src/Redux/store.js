import { configureStore } from "@reduxjs/toolkit";
import ActionReducer from "./ActionSlice";

export const store = configureStore({
  reducer: {
    actions: ActionReducer,
  },
});
