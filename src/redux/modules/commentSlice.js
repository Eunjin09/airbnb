import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//axios

//댓글 작성
axios
  .post(`localhost:5000/comments`, {
    comment: "comment",
  })
  .then((response) => {
    setComment((current) =>
      current.map((value) => {
        if (comment.id === value.id) {
          value.comment = input_text;
        }
        return value;
      })
    );
  });

// //댓글 삭제
//   axios
//     .delete(
//       `localhost:5000/comments`
//     )
//     .then((response) => {
//       setComment((current) =>
//         current.filter((value) => {
//           return comment.id !== value.id;
//         })
//       );
//     });

//action, action function, reducer
export const CommentSlice = createSlice({
  name: "comments",
  initialState: {
    list: [
      {
        id: 1,
        houseId: 1,
        comment: "comment 작성 요망",
        nickName: "닉네임",
        createdAt: "2022년 6월",
      },
    ],
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
      const new_commentlist = state.list.filter((v) => v.id !== action.payload);
      state.list = new_commentlist;
      // console.log(new_commentlist);
    },
  },
});

// action creator export
// const actionCreators = {db}
// export {actionCreators};

export const { commentWrite, commentLoad, commentDelete } =
  CommentSlice.actions;
export default CommentSlice.reducer;
