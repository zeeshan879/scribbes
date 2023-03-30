import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";
import { Base_Url } from "../../config/baseUrl";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const initialState = {
  currentUser: null,
  userProfile: null,
  onlyHoldUserProfile: null,
  temBio: "",
  tempFollowCommunity: [],
  allcommunities: [],
  userFollowedCommunity: "",
  userList: [],
};
// =========user login
export const userLogin = createAsyncThunk("userLogin", async (data) => {
  try {
    const res = await axiosInstance.post(`${Base_Url}user/login`, data);
    cookies.set("token", res.data.data.token);
    axios.defaults.headers.authorization = res.data.data.token;
    console.log("responce=====>", res.data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "congrs....",
      text: res.data.data?.message,
      showConfirmButton: false,
      timer: 2000,
    });
    return res;
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: err.response.data.errorMessage,
    });
  }
});
// ========user signUP
export const userSignUP = createAsyncThunk("userSignUP", async (data) => {
  try {
    const res = await axiosInstance.post(`${Base_Url}user/register`, data);
    return res;
  } catch (err) {
    console.log(err);
  }
});
// add community
export const handleaddCommunity = createAsyncThunk(
  "handleaddCommunity",
  async (data) => {
    try {
      const res = await axiosInstance.post(
        `${Base_Url}community/add-community`,
        data
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "congrs....",
        text: "new community hass been added",
        showConfirmButton: false,
        timer: 2000,
      });
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);
// ===user join community========
export const userJoinCommunity = createAsyncThunk(
  "userJoinCommunity",
  async (data) => {
    try {
      const res = await axiosInstance.post(
        `${Base_Url}user/join-communities`,
        data
      );
      return res;
    } catch (err) {
      console.log(err);
    }
  }
);
// <=======get all community
export const getAllCommunity = createAsyncThunk("getAllCommunity", async () => {
  try {
    const { data } = await axiosInstance.get(
      `${Base_Url}community/getall-communities`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {
  try {
    const { data } = await axiosInstance.get(`${Base_Url}user/get-all-users`);
    return data.data;
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
        `${Base_Url}user/get-current-user/${userId}`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
// ====get user follow community
export const getFollowedCommunity = createAsyncThunk(
  "getFollowedCommunity",
  async (userId) => {
    console.log("receicve id", userId);
    try {
      const { data } = await axiosInstance.get(
        `${Base_Url}community/user-community/${userId}`
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
    holdUserProfile(state, action) {
      console.log("action playload", action.payload);
      state.onlyHoldUserProfile = action.payload;
    },
    userBio(state, action) {
      state.temBio = action.payload;
    },
    temUserCommunity(state, action) {
      state.tempFollowCommunity = action.payload;
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      state.currentUser = action.payload.data.data.user;
      // state.isLoading = false;
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload?.data;
      // state.isLoading = false;
    },
    [updateUserprofile.fulfilled]: (state, action) => {
      state.userProfile = action.payload;
      // state.isLoading = false;
    },
    [getAllCommunity.fulfilled]: (state, action) => {
      state.allcommunities = action.payload;
      // state.isLoading = false;
    },
    [getFollowedCommunity.fulfilled]: (state, action) => {
      console.log("action foolow", action.payload);
      state.userFollowedCommunity = action.payload;
      // state.isLoading = false;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.userList = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { chnagePageView, holdUserProfile, userBio, temUserCommunity } =
  userReducer.actions;
export default userReducer.reducer;
