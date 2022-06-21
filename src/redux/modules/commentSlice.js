import { createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

//axios

//댓글 작성
export const addCommentDB = (comment, houseId) => {
  const data = { comment, houseId };
  console.log(data);
  // debugger;
  // const data = [...comment, houseId]
  //commenthouseId = comment, houseId Detail.js에서 객체로 받아와야 id 추가 시 정상적으로 들어감.
  return async function (dispatch) {
    try {
      await instance.post(`/comment/${houseId}`, data).then((request) => {
        console.log(request);
        dispatch(commentWrite(request.data));
        console.log("후기 작성 완료");
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
    await instance.get(`/comment/${houseId}`).then((response) => {
      dispatch(commentLoad(response.data));
    });
  };
};

//댓글 삭제
export const deleteCommentDB = (id) => {
  return async function (dispatch) {
    instance
      .delete(`http://3.34.185.191/api/comments/${id}`)
      .then((response) => {
        dispatch(commentDelete(response));
        window.location.reload();
      });
  };
};

//action, action function, reducer
export const commentSlice = createSlice({
  name: "comments",
  initialState: {
    list: [
      {
        id: 1,
        houseId: 1,
        nickName: "이름",
        comment: "안녕하세요",
        createdAt: "2022년 6월",
      },
    ],
  },
  reducers: {
    //댓글 저장
    commentWrite: (state, action) => {
      const new_commentlist = state.list.push(action.payload);
      state.list = new_commentlist;
      console.log(new_commentlist);
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
// const actionCreators = {db}
// export {actionCreators};
const actionCreators = {
  addCommentDB,
  loadCommentDB,
  deleteCommentDB,
};

export { actionCreators };

export const { commentWrite, commentLoad, commentDelete } =
  commentSlice.actions;
export default commentSlice.reducer;
