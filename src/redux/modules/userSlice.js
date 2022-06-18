import { createSlice } from "@reduxjs/toolkit";
import instance from "./axios";

export const createUserDB = (data) => {
  return async function (dispatch) {
    await instance.post("/user/signup", data).then((response) => {
      window.location.replace("/login");
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
export const { createUser } = userSlice.actions;

export default userSlice.reducer;
