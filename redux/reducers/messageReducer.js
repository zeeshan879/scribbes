import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
// import swal from "sweetalert";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const initialState = {
  currentUser: null,
  privateMemberMsg: {},
  messages: [],
  currentRoom: "",
  newMessages: {},
};

export const updateSettings = createAsyncThunk(
  "updateSettings",
  async (obj) => {
    try {
      const res = await axios.put(obj.url, obj.formData, obj.config);
      if (res.status === 201) {
        console.log("consoledata===", res.data);
        // swal(res.data.mesasge, "", "success");
        cookies.set(res.data.role, res.data.token);
        return res.data.user;
      } else {
        // swal("Internal server error", "", "error");
      }
    } catch (err) {
      console.log(err);
    }
  }
);
export const updatePassword = createAsyncThunk(
  "updatePassword",
  async (obj) => {
    try {
      const { data } = await axios.put(obj.url, obj.passwordSettings);
      console.log("update password==", data);
      if (data) {
        // swal(data.message, "", "success");
      } else {
        // swal(data.message, "", "error");
      }
      return data.user;
    } catch (err) {
      console.log(err);
    }
  }
);

export const messageReducer = createSlice({
  name: "messageReducer",
  initialState: initialState,
  reducers: {
    setCurrentUserInChat(state, action) {
      state.currentUser = action.payload;
    },
    setCurrentRoom(state, action) {
      // console.log("setCurrentRoom", action.payload);
      state.currentRoom = action.payload;
    },
    setCurrentPrivateMemberMsg(state, action) {
      // console.log("setCurrentPrivateMemberMsg", action.payload);
      state.privateMemberMsg = action.payload;
    },
    setCurrentRoomMessages(state, action) {
      // console.log("setCurrentRoomMessages", action.payload);
      state.messages = action.payload;
    },
    addNotification: (state, { payload }) => {
      if (state.newMessages[payload]) {
        state.newMessages[payload] = state.newMessages[payload] + 1;
      } else {
        state.newMessages[payload] = 1;
      }
    },
    resetNotification: (state, { payload }) => {
      // console.log("softthgrive===", payload)
      delete state.newMessages[payload];
    },
    changeCurrentSideBar: (state, action) => {
      state.currentSideBar = action.payload;
    },
  },
  extraReducers: {
    [updateSettings.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setCurrentRoom,
  setCurrentPrivateMemberMsg,
  setCurrentRoomMessages,
  addNotification,
  resetNotification,
  setCurrentUserInChat,
  changeCurrentSideBar,
} = messageReducer.actions;
export default messageReducer.reducer;
