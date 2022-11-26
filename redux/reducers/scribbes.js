import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activePageTab: 1,
  isMessage: false,
  adminToolTabs: 1,
  specficInterestTab: 1,
  settingTabs: 1,
  scribbesTabs:1
};

export const scribbes = createSlice({
  name: "scribbes",
  initialState: initialState,
  reducers: {
    chnagePageView(state, action) {
      state.activePageTab = action.payload;
    },
    chnageAdminToolTabs(state, action) {
      state.adminToolTabs = action.payload;
    },
    chnageSpecficInterst(state, action) {
      state.specficInterestTab = action.payload;
    },
    handleMessageView(state, action) {
      state.isMessage = action.payload;
    },
    handleSettingTabs(state, action) {
      state.settingTabs = action.payload;
    },
    handleScrribsTabs(state, action) {
      state.scribbesTabs = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { chnagePageView,handleScrribsTabs,chnageSpecficInterst,handleSettingTabs, handleMessageView, chnageAdminToolTabs } =
  scribbes.actions;
export default scribbes.reducer;
