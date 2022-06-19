import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./DetailStyle.css";
import reviewimg from "../image/reviewrank.png";
import fakeimg from "../image/mock_calculator.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as CommentActions } from "../redux/modules/commentSlice";
import { commentDelete } from "../redux/modules/commentSlice";

function Detail() {
  const params = useParams();
  const houseId = Number(params.id) + 1; //houseId 는 1부터 시작이라 parameter 에 1을 더해야 순서가 맞음.
  // console.log(houseId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //댓글 작성
  const [comment, setComment] = useState();
  const commenthouseId = { comment, houseId };
  const onChange = (e) => {
    setComment(e.target.value);
  };
  const addComment = () => {
    dispatch(CommentActions.addCommentFB({ comment, houseId }));
  };

  //댓글 불러오기
  const commentsList = useSelector((state) => state.comment.list);
  // console.log(commentsList);

  useEffect(() => {
    dispatch(CommentActions.loadCommentFB());
  }, []);

  return (
    <>
      <OutterBox>
        <div className="TopBox">
          <section>
            <h2
              style={{
                marginBottom: "0px",
              }}
            >
              house name : 블랑드누아 (2인) blanc de noir 하귀애월해안도로
            </h2>
            <div className="SecondBox">
              <span>★ 4.74 후기 commentCnt개 "address"</span>
              <div
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <button className="ButtonTransparent" onClick={() => {}}>
                  삭제
                </button>
                <button
                  className="ButtonTransparent"
                  onClick={() => {
                    navigate("/edit");
                  }}
                >
                  수정
                </button>
                <button className="ButtonTransparent">저장</button>
              </div>
            </div>
          </section>
          <div className="ImageBox">
            <div style={{ width: "100%", maxWidth: "560px" }}>image</div>
            <div style={{ width: "100%", maxWidth: "560px" }}>
              <div style={{ display: "flex" }}>
                <SmallImageBox
                  style={{
                    backgroundImage:
                      "url(https://a0.muscache.com/im/pictures/3639808c-8b04-4edf-b25a-c5e7e2adb254.jpg?im_w=1440)",
                  }}
                ></SmallImageBox>

                <SmallImageBox
                  style={{
                    backgroundImage:
                      "url(https://a0.muscache.com/im/pictures/c2bedda1-c94a-42a4-94ca-a918f5dcc5de.jpg?im_w=1440)",
                  }}
                ></SmallImageBox>
              </div>
              <div style={{ display: "flex" }}>
                <SmallImageBox
                  style={{
                    backgroundImage:
                      "url(https://a0.muscache.com/im/pictures/5c166cee-e553-48da-88d0-38af10d0fcc9.jpg?im_w=1440)",
                  }}
                ></SmallImageBox>
                <SmallImageBox
                  style={{
                    width: "100%",
                    maxwidth: "280px",
                    height: "200px",
                    backgroundSize: "cover",
                    backgroundImage:
                      "url(https://a0.muscache.com/im/pictures/47a4981a-9f93-4172-a5ef-cbd1096b04e9.jpg?im_w=1440)",
                  }}
                ></SmallImageBox>
              </div>
            </div>
          </div>
        </div>
        <div className="Body">
          <InfoOutterBox>
            <div className="InfoTitleBox">
              <div>
                <h2
                  style={{
                    marginBottom: "0px",
                  }}
                >
                  userName님이 호스팅하는 집의 개인실
                </h2>
                <span>최대 인원 personCnt명</span>
              </div>
              <span>Price</span>
            </div>
            <Hr />
            <div className="aricoverImg" />
            <p>
              모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
              경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
              포함됩니다.
            </p>
            <p style={{ fontWeight: "600", textDecoration: "underline" }}>
              더 알아보기
            </p>
            <Hr />
            <p>houseinfo</p>
            <Hr />
            <h2 className="BodyTitle">숙소 편의시설</h2>
            <div
              style={{
                width: "100%",
                maxWidth: "300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span> 💻 무선 인터넷</span>
              <span> 🅿️ 건물 내 무료주차</span>
            </div>
            <Hr />
            <h2 className="BodyTitle" style={{ marginBottom: "2px" }}>
              체크인 날짜를 선택해주세요.
            </h2>
            <span
              style={{ color: "#8e8e8e", fontWeight: "400", fontSize: "14px" }}
            >
              여행 날짜를 입력하여 정확한 요금을 확인하세요.
            </span>
            <div className="Calendar"></div>
            달력 react-calendar? react-datepicker? moment?
          </InfoOutterBox>
          <div
            style={{
              width: "350px",
              backgroundSize: "cover",
            }}
          >
            <img src={fakeimg} alt="fakeimg" width="350px" />
          </div>
        </div>
        <Hr />

        {/* 후기/댓글 부분 */}
        <div className="Commentarea">
          <h2 className="BodyTitle">★ 4.74 후기﹒commentCnt개</h2>
          <img
            src={reviewimg}
            alt="reviewimg"
            width="100%"
            max-width="1120px"
          />
          <div className="CommentBox">
            <div
              style={{
                display: "flex",
                gap: "1%",
                margin: "2% 0",
                justifyContent: "center",
              }}
            >
              <textarea
                className="InputComment"
                placeholder="100자 이내로 후기를 작성해주세요."
                onChange={onChange}
                value={comment}
                style={{ height: "1%" }}
              ></textarea>
              <button
                onClick={() => {
                  dispatch(addComment);
                  // console.log(comment);
                }}
              >
                작성
              </button>
            </div>
            <div>
              <div className="CommentList">
                {commentsList.map((comment, index) => {
                  return (
                    <div
                      style={{
                        margin: "1%",
                        backgroundColor: "rgb(242 235 208)",
                      }}
                      key={index}
                    >
                      <div style={{ marginLeft: "2%" }}>
                        <div>
                          <span>{comment.nickName}</span>
                          <span> | </span>
                          <span>{comment.createdAt}</span>
                        </div>
                      </div>

                      <div>
                        <div>
                          <span>{comment.comment}</span>
                        </div>
                      </div>
                      <div
                        style={{
                          margin: "1% 2%",
                          display: "flex",
                          justifyContent: "flex-end",
                        }}
                      >
                        {/* <button onClick={() => {}}>수정</button> */}
                        <button
                          onClick={() => {
                            console.log("삭제버튼 클릭");
                            // console.log(comment.id);
                            dispatch(
                              // commentDelete(comment.id)
                              CommentActions.deleteCommentFB(
                                comment.id
                                // comment.nickName
                              )
                            );
                          }}
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <Hr />
            <h2 className="BodyTitle">호스팅 지역</h2>
            map , address
            <Hr />
            <h2 className="BodyTitle">호스트: nickName님</h2>
          </div>
        </div>
      </OutterBox>
    </>
  );
}
const OutterBox = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: auto;
`;

const SmallImageBox = styled.div`
  width: 100%;
  maxwidth: 280px;
  // height: 100%;
  // maxheight: 200px;
  height: 200px;
  background-size: cover;
`;

const InfoOutterBox = styled.div`
  width: 60%;
  position: relative;
`;

const Hr = styled.div`
  margin: 5% 0;
  border-top: 1px solid #9c9c9c;
  border-bottom: 1px solid #f6f6f6;
  border-color: #dddddd;
`;
export default Detail;
