import { configureStore } from "@reduxjs/toolkit";
import scribbes from "./reducers/scribbes";
import userReducer from "./reducers/userReducer";
import messageReducer from "./reducers/messageReducer";

export const store = configureStore({
  reducer: {
    allGernalFunction: scribbes,
    user: userReducer,
    messageReducer: messageReducer,
  },
});
