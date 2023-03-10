import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const initialState = {
  currentUser: null,
};

export const userLogin = createAsyncThunk("userLogin", async (data) => {
  try {
    const res = await axiosInstance.post(
      `http://localhost:5000/user/login`,
      data
    );
    cookies.set("token", res.data.data.token);
    axios.defaults.headers.authorization = res.data.data.token;
    return res;
  } catch (err) {
    console.log(err);
  }
});
export const userSignUP = createAsyncThunk("userSignUP", async (data) => {
  try {
    const res = await axiosInstance.post(
      `http://localhost:5000/user/register`,
      data
    );
    console.log("signUpUser data====>", data);
    return res;
  } catch (err) {
    console.log(err);
  }
});
// get requests
export const getCurrentUser = createAsyncThunk(
  "getCurrentUser",
  async (userId) => {
    try {
      const { data } = await axiosInstance.get(
        `http://localhost:5000/user/get-current-user/${userId}`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
// putt requests
export const updateUserprofile = createAsyncThunk(
  "updateUserprofile",
  async (obj) => {
    console.log("whats is obj", obj);
    try {
      const res = await axiosInstance.put(
        `http://localhost:5000/user/update-user-profile/${obj.userId}`,
        obj.data
      );

      return res;
    } catch (err) {
      console.log(err);
    }
  }
);
export const userReducer = createSlice({
  name: "userReducer",
  initialState: initialState,

  reducers: {
    chnagePageView(state, action) {
      state.activePageTab = action.payload;
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      // state.isLoading = false;
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload.data;
      // state.isLoading = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const { chnagePageView } = userReducer.actions;
export default userReducer.reducer;
