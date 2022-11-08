import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {
  activePageTab: 1,
  isMessage:false,
};

export const scribbes = createSlice({
  name: "scribbes",
  initialState: initialState,
  reducers: {
    chnagePageView(state, action) {
      state.activePageTab = action.payload;
    },
    handleMessageView(state, action) {
      state.isMessage = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { chnagePageView ,handleMessageView} = scribbes.actions;
export default scribbes.reducer;
