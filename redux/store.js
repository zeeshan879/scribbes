import { configureStore } from "@reduxjs/toolkit";
import scribbes from "./reducers/scribbes";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    allGernalFunction: scribbes,
    user:userReducer
  },
});
