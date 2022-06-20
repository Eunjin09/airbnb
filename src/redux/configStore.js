// 리덕스 툴킷!!
import { configureStore } from "@reduxjs/toolkit";
// import contentReducer from "./modules/contentSlice";
import userReducer from "./modules/userSlice";

import commentSlice from "./modules/commentSlice";

const store = configureStore({
  reducer: {
    // content: contentReducer,
    user: userReducer,
    comment: commentSlice,
  },
});

export default store;
