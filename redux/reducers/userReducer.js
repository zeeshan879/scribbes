import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";
import {Base_Url} from "../../config/baseUrl"
import Cookies from "universal-cookie";
const cookies = new Cookies();
const initialState = {
  currentUser: null,
  userProfile:null,
  onlyHoldUserProfile:null,
  temBio:""
};
console.log("Base_Url",Base_Url)
export const userLogin = createAsyncThunk("userLogin", async (data) => {
  try {
    const res = await axiosInstance.post(
      `${Base_Url}user/login`,
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
      `${Base_Url}user/register`,
      data
    );
    console.log("signUpUser data====>", data);
    return res;
  } catch (err) {
    console.log(err);
  }
});
// add community
export const handleaddCommunity = createAsyncThunk("handleaddCommunity", async (data) => {
  try {
    const res = await axiosInstance.post(
      `${Base_Url}community/add-community`,
      data
    );
    console.log("handleaddCommunity data====>", data);
    return res;
  } catch (err) {
    console.log(err);
  }
});
// ===user join community========
export const userJoinCommunity = createAsyncThunk("userJoinCommunity", async (data) => {
  try {
    const res = await axiosInstance.post(
      `http://localhost:5000/user/join-communities`,
      data
    );
    console.log("userJoinCommunity data====>", data);
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
      return data.data;
    } catch (err) {
      console.log(err);
    }
  }
);
// get user community
export const getUserCommunity = createAsyncThunk(
  "getUserCommunity",
  async (userId) => {
    try {
      const { data } = await axiosInstance.get(
        `http://localhost:5000/community/user-community/${userId}`
      );
      return data.data;
    } catch (err) {
      console.log(err);
    }
  }
);
// putt requests
export const updateUserprofile = createAsyncThunk(
  "updateUserprofile",
  async (obj) => {
    console.log("whats is obj",obj)
    try {
      const { data } = await axiosInstance.put(
        `http://localhost:5000/user/update-user-profile/${obj.userId}`,obj.introduction 
      );
  
      return data.data;
    } catch (err) {
      console.log(err);
    }
  }
);
// =====user introduction==========
export const userIntroduction = createAsyncThunk(
  "userIntroduction",
  async (obj) => {
    console.log("whats is obj",obj)
    try {
      const { data } = await axiosInstance.put(
        `http://localhost:5000/user/update-user-profile/${obj.userId}`,obj.introduction
      );
  
      return data.data;
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
    holdUserProfile(state, action) {
      state.onlyHoldUserProfile = action.payload;
    },
    userBio(state, action) {
      state.temBio = action.payload;
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      // state.isLoading = false;
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      // state.isLoading = false;
    },
    [updateUserprofile.fulfilled]: (state, action) => {
  
      state.userProfile = action.payload;
      // state.isLoading = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const { chnagePageView,holdUserProfile,userBio } = userReducer.actions;
export default userReducer.reducer;
