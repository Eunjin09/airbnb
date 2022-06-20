import axios from "axios";

const instance = axios.create({
commonURL : ""
})
// const token = localStorage.getItem('token')
// instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
export default instance
