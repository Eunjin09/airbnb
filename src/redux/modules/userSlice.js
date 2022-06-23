import { createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

//회원가입
export const createUserDB = (data) => {
  return async function (dispatch) {
    await instance
      .post("/signup", data, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((response) => {
        window.alert(response.data.message);
        // window.alert(response.message);
        window.location.replace("/");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          window.alert(error.response.data.message);
        }
      });
  };
};
//로그인
export const loginUserDB = (data) => {
  return async function (dispatch) {
    console.log("로그인");
    await instance
      .post("/login", data, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user_name", response.data.nickName);
        localStorage.setItem("user_id", response.data.userId);
        console.log(response.data.accessToken);
        window.location.replace("/");
      });
  };
};
// 로그인정보받기
// export const loadUserDB = () => {
//   return async function (dispatch) {
//     await instance
//       .get("http://localhost:8080/reissue", {
//         "Content-Type": "application/json",
//         withCredentials: true,
//       })
//       .then((response) => {
//         localStorage.setItem("user_name", response.data.nickName);
//         localStorage.setItem("user_id", response.data.userId);
//         dispatch(loadUser(response.data));
//         console.log(response.data);
//       });
//   };
// };

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
