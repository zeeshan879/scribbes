import React, { useEffect } from "react";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/reducers/userReducer";

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
  useEffect(() => {
    dispatch(getCurrentUser(1));
  }, []);
  return <Component {...pageProps} />;
};
