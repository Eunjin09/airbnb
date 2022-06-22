// 리덕스 툴킷!!
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./modules/userSlice";
import commentSlice from "./modules/commentSlice";
import listSlice from "./modules/listSlice";
import detailSlice from "./modules/detailSlice";

const store = configureStore({
  reducer: {
    post: listSlice,
    user: userReducer,
    comment: commentSlice,
    detail: detailSlice,
  },
});

export default store;
