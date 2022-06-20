import { createSlice } from "@reduxjs/toolkit";
import instance from "./axios";

//회원가입
export const createUserDB = (data) => {
  return async function (dispatch) {
    await instance.post("/signup", data).then((response) => {
      window.location.replace("/login");
    });
  };
};
//로그인
export const loginUserDB = (data) => {
  return async function (dispatch) {
    console.log("로그인");
    await instance.post("/login", data).then((response) => {
      localStorage.setItem("token", response.data.accessToken);
      window.location.replace("/");
    });
  };
};
//로그인정보받기
export const loadUserDB = () => {
  return async function (dispatch) {
    await instance.get("/reissue").then((response) => {
      localStorage.setItem("user_name", response.data.nickName);
      localStorage.setItem("user_id", response.data.userId);
      dispatch(loadUser(response.data));
    });
  };
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user_list: [],
  },
  reducers: {
    loadUser: (state, action) => {
      state.user_list.push(action.payload);
    },
  },
});

export const boardActions = userSlice.actions;
export const { loadUser, createUser } = userSlice.actions;
export default userSlice.reducer;
