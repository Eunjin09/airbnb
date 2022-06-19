import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//axios

//댓글 작성
export const addCommentFB = (commenthouseId) => {
  //commenthouseId = comment, houseId Detail.js에서 객체로 받아와야 id 추가 시 정상적으로 들어감.
  return async function (dispatch) {
    try {
      await axios
        .post(`http://localhost:5001/comments/`, commenthouseId)
        .then((request) => {
          dispatch(commentWrite(request.data));
          alert("후기 작성 완료");
          window.location.reload();
        });
    } catch (error) {
      console.log("failed", error);
    }
  };
};

// 댓글 불러오기
export const loadCommentFB = (houseId) => {
  return async function (dispatch) {
    await axios.get(`http://localhost:5001/comments/`).then((response) => {
      dispatch(commentLoad(response.data));
    });
  };
};

// //댓글 삭제
export const deleteCommentFB = (id) => {
  return async function (dispatch) {
    axios.delete(`http://localhost:5001/comments/${id}`).then((response) => {
      dispatch(commentDelete(response));
      window.location.reload();
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
      const new_commentlist = state.list.push(action.payload); //push? unshift?
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
// const actionCreators = {db}
// export {actionCreators};
const actionCreators = {
  addCommentFB,
  loadCommentFB,
  deleteCommentFB,
};

export { actionCreators };

export const { commentWrite, commentLoad, commentDelete } =
  commentSlice.actions;
export default commentSlice.reducer;
