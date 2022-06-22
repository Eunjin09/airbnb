import { async } from "@firebase/util";
import { createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

// 미들웨어
// 게시글 전체 조회
export const loadPostDB = (data) => {
  return async function (dispatch) {
    await instance
      .get("/api/allhouse", data, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        dispatch(loadPost(response.data));
      });
  };
};

// 게시글 생성
export const addPostDB = (data) => {
  return async function (dispatch) {
    await instance
      .post("/api/house", data, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((response) => {
        window.alert("등록 완료!");
        window.location.replace("/");
        dispatch(addPost(data));
      });
  };
};

//게시글 삭제
export const deletePostDB = (id) => {
  return async function (dispatch) {
    await instance.delete(`/api/house/${id}`).then((response) => {
      console.log("삭제 리스폰스", response.data, `/api/house/${id}`);
      dispatch(deletePostDB(id));
      window.location.replace("/");
    });
  };
};

//게시글 수정
export const updatePostDB = (id) => {
  return async function (dispatch) {
    await instance.put(`/api/house/${id}`).then((response) => {
      console.log("수정 리스폰스");
      dispatch(updatePostDB(id));
      window.location.replace("/");
    });
  };
};
// 리듀서
const listSlice = createSlice({
  name: "post",
  initialState: {
    post_list: [],
  },
  reducers: {
    // 생성
    addPost: (state, action) => {
      state.post_list.push(action.payload);
    },
    // 조회
    loadPost: (state, action) => {
      console.log(action.payload);
      state.post_list = action.payload;
    },
    // 삭제
    deletePost: (state, action) => {
      const new_post = state.post_list.filter((v, i) => i !== action.payload);
      state.post_list = new_post;
    },
    //수정
    updatePost: (state, action) => {
      const index = state.post_list.findIndex(
        (v) => v.id === action.payload.id
      );
      state.post_list[index] = action.payload;
    },
  },
});

export const { addPost, loadPost, deletePost, updatePost } = listSlice.actions;
export default listSlice.reducer;
