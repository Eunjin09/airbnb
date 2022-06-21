import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.185.191",
});
const token = localStorage.getItem("token");
instance.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;
export default instance;
