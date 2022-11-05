import { configureStore } from "@reduxjs/toolkit";
import scribbes from "./reducers/scribbes";

export const store = configureStore({
  reducer: {
    allGernalFunction: scribbes,
  },
});
