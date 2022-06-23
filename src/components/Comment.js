import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./DetailStyle.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as CommentActions } from "../redux/modules/commentSlice";

function Comment(props) {
  const params = useParams();
  const houseId = Number(params.id);
  const dispatch = useDispatch();

  const user_name = localStorage.getItem("user_name"); //로그인 여부 확인

  //댓글 작성
  const [comment, setComment] = useState();
  const [textareaHeight, setTextareaHeight] = useState(0);
  const onChange = (e) => {
    setComment(e.target.value);
    setTextareaHeight(e.target.value.split("\n").length - 1); //글 작성 시 textarea 창 늘어나기
  };

  const addComment = () => {
    dispatch(CommentActions.addCommentDB(comment, houseId));
  };

  //댓글 불러오기
  const commentsList = useSelector((state) => state.comment.list);
  const commentCnt = commentsList.length;

  //댓글 더보기
  const [limit, setLimit] = useState(2);
  const moreComment = commentsList.slice(0, limit);

  useEffect(() => {
    dispatch(CommentActions.loadCommentDB(params.id));
  }, []);

  return (
    <>
      {/* 후기/댓글 부분 */}
      <div className="Commentarea">
        <div className="CommentBox">
          <div
            style={{
              display: "flex",
              gap: "1%",
              margin: "2% 0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <textarea
              type="text"
              className="InputComment"
              placeholder="300자 이내로 후기를 작성해주세요."
              onChange={onChange}
              value={comment}
              style={{ height: (textareaHeight + 1) * 27 + "px" }}
              maxLength="300" //300자 제한
            ></textarea>
            {!user_name ? (
              <DetailButton
                onClick={() => {
                  alert("로그인이 필요합니다.");
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                작성
              </DetailButton>
            ) : (
              <DetailButton
                onClick={() => {
                  dispatch(addComment());
                }}
              >
                작성
              </DetailButton>
            )}
          </div>
          <div>
            <div className="CommentList">
              {moreComment.map((commentvalue, index) => {
                return (
                  <div
                    style={{
                      margin: "0.2%",
                    }}
                    key={index}
                  >
                    <div
                      style={{
                        margin: "2% 0% 0% 2%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div className="profileImg" alt="profileImg" />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span style={{ fontSize: "16px" }}>
                          {commentvalue.nickName}
                        </span>
                        <span style={{ color: "gray", fontSize: "14px" }}>
                          등록일: {commentvalue.createdAt}
                        </span>
                      </div>
                      <br />
                    </div>
                    <div>
                      <div style={{ margin: "1% 3% 2% 3%" }}>
                        <span style={{ width: "1000px" }}>
                          {commentvalue.comment}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        margin: "1% 2%",
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "1%",
                      }}
                    >
                      {user_name ? (
                        <>
                          <DetailButton onClick={() => {}}>수정</DetailButton>
                          <DetailButton
                            onClick={() => {
                              console.log("삭제버튼 클릭");
                              dispatch(
                                CommentActions.deleteCommentDB(commentvalue.id)
                              );
                            }}
                          >
                            삭제
                          </DetailButton>
                        </>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
            <MoreButton onClick={() => setLimit((prev) => prev + 2)}>
              후기 더보기
            </MoreButton>
          </div>
          <Hr />
        </div>
      </div>
    </>
  );
}

const Hr = styled.div`
  margin: 5% 0;
  border-top: 1px solid #9c9c9c;
  border-bottom: 1px solid #f6f6f6;
  border-color: #dddddd;
`;

const DetailButton = styled.div`
  border: none;
  text-align: center;
  font-weight: 600;
`;

const MoreButton = styled.div`
  border: 1px solid;
  padding: 13px 23px;
  width: 100px;
  height: auto;
  font-weight: 600;
  border-radius: 8px;
  text-align: center;
  margin: 1% 0% 0% 2%;
`;

export default Comment;
