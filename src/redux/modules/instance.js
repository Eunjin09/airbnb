import axios from "axios";

const instance = axios.create({
  commonURL: "http://3.34.185.191/api",
});
const token = localStorage.getItem("token");
instance.defaults.headers.common["Authorization"] = token
  ? `Bearer ${token}`
  : null;
export default instance;
