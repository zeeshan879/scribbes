import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {
  activePageTab: 1,
};

export const scribbes = createSlice({
  name: "scribbes",
  initialState: initialState,
  reducers: {
    chnagePageView(state, action) {
      state.activePageTab = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { chnagePageView } = scribbes.actions;
export default scribbes.reducer;
