// 리덕스 툴킷!!
import { configureStore } from "@reduxjs/toolkit";
// import contentReducer from "./modules/contentSlice";
import userReducer from "./modules/userSlice";
import commentSlice from "./modules/commentSlice";
import detailSlice from "./modules/detailSlice";

const store = configureStore({
  reducer: {
    // content: contentReducer,
    user: userReducer,
    comment: commentSlice,
    detail: detailSlice,
  },
});

export default store;
