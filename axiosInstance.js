import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

axios.defaults.headers.authorization = cookies.get("token");
console.log("check env file====>",process.env.REACT_APP_BASE_URL)
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
  crossorigin: true,
});

export default instance;