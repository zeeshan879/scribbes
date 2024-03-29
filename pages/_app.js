import React, { useEffect } from "react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useDispatch } from "react-redux";
import {
  getCurrentUser,
  getFollowedCommunity,
} from "../redux/reducers/userReducer";
import Router from "next/router";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";
import { setCurrentUserInChat } from "../redux/reducers/messageReducer";
const cookies = new Cookies();

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Application Component={Component} pageProps={pageProps} />
    </Provider>
  );
};

export default MyApp;

const Application = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const token = cookies.get("token");

  useEffect(() => {
    if (token) {
      const user = jwt_decode(token);
      dispatch(getCurrentUser(user.user?.id));
      dispatch(setCurrentUserInChat(user.user));
      dispatch(getFollowedCommunity(user.user?.id));
    } else {
      Router.push("/login");
    }
  }, []);
  return <Component {...pageProps} />;
};
