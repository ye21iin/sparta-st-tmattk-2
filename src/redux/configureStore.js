import messageReducer from "./messageSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // key-value pair (만든 리듀서 매핑)
    message: messageReducer,
  },
});
