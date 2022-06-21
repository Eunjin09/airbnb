import { createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

//axios

//댓글 작성
export const addCommentDB = (comment, houseId) => {
  const data = { comment, houseId };

  return async function (dispatch) {
    try {
      await instance.post(`/api/comment/${houseId}`, data).then((request) => {
        dispatch(commentWrite(request.data));
        window.alert(request.data.message);
        console.log(request.data.status);
        window.location.reload();
      });
    } catch (error) {
      console.log("failed", error);
    }
  };
};

// 댓글 불러오기
export const loadCommentDB = (houseId) => {
  return async function (dispatch) {
    await instance.get(`/api/comment/${houseId}`).then((response) => {
      console.log(response);
      dispatch(commentLoad(response.data));
    });
  };
};

//댓글 삭제
export const deleteCommentDB = (id) => {
  return async function (dispatch) {
    await instance.delete(`/api/comment/${id}`).then((response) => {
      try {
        window.alert(response.data.message);
        console.log(response.data.status);
        dispatch(commentDelete(response));
        window.location.reload();
      } catch (error) {
        console.log("failed", response.data.message);
      }
    });
  };
};

//action, action function, reducer
export const commentSlice = createSlice({
  name: "comments",
  initialState: {
    list: [],
  },
  reducers: {
    //댓글 저장
    commentWrite: (state, action) => {
      const new_commentlist = state.list.push(action.payload);
      state.list = new_commentlist;
      // console.log(new_commentlist);
    },
    //댓글 불러오기
    commentLoad: (state, action) => {
      state.list = action.payload;
      // console.log(state.list);
    },
    //댓글 삭제
    commentDelete: (state, action) => {
      // console.log(action.payload);
      const new_commentlist = state.list.filter((v) => v.id !== action.payload);
      state.list = new_commentlist;
      // console.log(new_commentlist);
    },
  },
});

// action creator export
const actionCreators = {
  addCommentDB,
  loadCommentDB,
  deleteCommentDB,
};

export { actionCreators };

export const { commentWrite, commentLoad, commentDelete } =
  commentSlice.actions;
export default commentSlice.reducer;
