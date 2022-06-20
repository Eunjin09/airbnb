import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./DetailStyle.css";
import reviewimg from "../image/reviewrank.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as CommentActions } from "../redux/modules/commentSlice";
// import Map from "./Detailmap";

function Detail() {
  const params = useParams();
  const houseId = Number(params.id) + 1; //houseId 는 1부터 시작이라 parameter 에 1을 더해야 순서가 맞음.
  // console.log(houseId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user_name = localStorage.getItem("user_name"); //로그인 여부 확인
  const adultcount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // console.log(adultcount);
  //댓글 작성
  const [comment, setComment] = useState();
  const [textareaHeight, setTextareaHeight] = useState(0);
  const commenthouseId = { comment, houseId };
  const onChange = (e) => {
    setComment(e.target.value);
    setTextareaHeight(e.target.value.split("\n").length - 1); //글 작성 시 textarea 창 늘어나기
  };

  const addComment = () => {
    dispatch(CommentActions.addCommentDB({ comment, houseId }));
  };

  //댓글 불러오기
  const commentsList = useSelector((state) => state.comment.list);
  // console.log(commentsList);
  const [clist, setClist] = useState();
  // clist.slice(0, 10);

  useEffect(() => {
    dispatch(CommentActions.loadCommentDB());
  }, []);

  //지도

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
            <div
              style={{
                width: "100%",
                maxWidth: "560px",
                backgroundSize: "cover",
                borderTopLeftRadius: "5%",
                borderBottomLeftRadius: "5%",
                margin: "0.5%",
                // backgroundImage:
                //   "url(https://a0.muscache.com/im/pictures/3639808c-8b04-4edf-b25a-c5e7e2adb254.jpg?im_w=1440)",
              }}
            >
              image
            </div>
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
                    borderTopRightRadius: "5%",
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
                    borderBottomRightRadius: "5%",
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
              <div
                style={{
                  display: "flex",
                  gap: "2%",
                  alignItems: "center",
                  width: "150px",
                }}
              >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: "24px",
                    width: "24px",
                    fill: "currentcolor",
                  }}
                >
                  <path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"></path>
                </svg>
                <span>무선 인터넷</span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "2%",
                  alignItems: "center",
                  width: "150px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: "24px",
                    width: "24px",
                    fill: "currentcolor",
                  }}
                >
                  <path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.693-5l.42 1.119C29.253 15.036 30 16.426 30 18v9c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2H8v2c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-9c0-1.575.746-2.965 1.888-3.882L4.308 13H2v-2h3v.152l1.82-4.854A2.009 2.009 0 0 1 8.693 5h14.614c.829 0 1.58.521 1.873 1.297L27 11.151V11h3v2h-2.307zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v5h24zm-3-10h.557l-2.25-6H8.693l-2.25 6H25zm-15 7h12v-2H10v2z"></path>
                </svg>
                <span>건물 내 무료주차</span>
              </div>
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
            <FormBox>
              <h1>요금을 확인하려면 날짜를 입력하세요.</h1>
              <p> ★ 4.74 후기 commentCnt개 </p>
              <form>
                <div className="check_date">
                  <div className="checkIn">
                    <label>
                      <span>체크인</span>
                      <input
                        type="text"
                        placeholder="날짜 추가"
                        style={{ width: "110px" }}
                      />
                    </label>
                  </div>
                  <div className="checkOut">
                    <label>
                      <span>체크아웃</span>
                      <input
                        type="text"
                        placeholder="날짜 추가"
                        style={{ width: "110px" }}
                      />
                    </label>
                  </div>
                </div>
                <div className="personCnt">
                  <div className="adultBox">
                    <label>
                      <span>성인</span>
                      <select name="adult" id="">
                        {adultcount.map((v) => {
                          return <option value={v}>{v}</option>;
                        })}
                      </select>
                    </label>
                  </div>
                  <div className="childBox">
                    <label>
                      <span>어린이</span>
                      <select name="child" id="">
                        <option value="4">1</option>
                        <option value="8">2</option>
                        <option value="12">3</option>
                      </select>
                    </label>
                  </div>
                </div>
                <SearchBtn>예약 가능 여부 보기</SearchBtn>
              </form>
              <br />
              <br />
              <br />
              <p
                style={{
                  textAlign: "center",
                  color: "gray",
                  fontWeight: "800",
                  textDecoration: "underline 2px",
                }}
              >
                숙소 신고하기
              </p>
            </FormBox>
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
                type="text"
                className="InputComment"
                placeholder="300자 이내로 후기를 작성해주세요."
                onChange={onChange}
                value={comment}
                style={{ height: (textareaHeight + 1) * 27 + "px" }}
                maxLength="300" //300자 제한
              ></textarea>
              {!user_name ? (
                <button
                  onClick={() => {
                    alert("로그인이 필요합니다.");
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  작성
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(addComment);
                    // console.log(comment);
                  }}
                >
                  작성
                </button>
              )}
            </div>
            <div>
              <div className="CommentList">
                {commentsList.map((comment, index) => {
                  return (
                    <div
                      style={{
                        margin: "1%",
                        // backgroundColor: "rgb(242 235 208)",
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
                            닉네임: {comment.nickName}
                          </span>
                          <span style={{ color: "gray", fontSize: "14px" }}>
                            등록일: {comment.createdAt}
                          </span>
                        </div>
                        <br />
                      </div>
                      <div>
                        <div style={{ margin: "1% 3% 2% 3%" }}>
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
                        {user_name ? (
                          <button
                            onClick={() => {
                              console.log("삭제버튼 클릭");
                              // console.log(comment.id);
                              dispatch(
                                // commentDelete(comment.id)
                                CommentActions.deleteCommentDB(
                                  comment.id
                                  // comment.nickName
                                )
                              );
                            }}
                          >
                            삭제
                          </button>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => {
                  setClist();
                }}
              >
                더보기
              </button>
            </div>
            <Hr />
            {/* 숙소 지도 */}
            <h2 className="BodyTitle">호스팅 지역</h2>
            <div id="map" style={{ width: "1000px", height: "400px" }}>
              {/* <Map /> */}
            </div>
            address
            <Hr />
            <h2 className="BodyTitle">호스트: nickName님</h2>
          </div>
        </div>
      </OutterBox>
    </>
  );
}
const OutterBox = styled.div`
  width: 95%;
  max-width: 1120px;
  margin: auto;
  border-top: 1px solid #ddd;
`;

const SmallImageBox = styled.div`
  width: 100%;
  max-width: 28vw;
  margin: 1%;
  height: 20vh;
  background-size: cover;
  &:hover {
    filter: brightness(50%);
  }
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

const FormBox = styled.div`
  position: relative;
  width: 280px;
  height: 340px;
  background: #fff;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
  border-radius: 12px;

  h1 {
    font-size: 28px;
    font-weight: 500;
    margin-top: 0;
  }
  p {
    font-size: 16px;
    font-weight: 600;
  }
  .place,
  .check_date,
  .personCnt {
    width: 90%;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 8px 14px;
    margin-bottom: 8px;
    div {
      display: inline-block;
      width: 50%;
    }
    .checkIn {
      border-right: 1px solid #ddd;
      padding-right: 7px;
    }
    .checkOut {
      padding-left: 14px;
    }
    .adultBox {
      border-right: 1px solid #ddd;
      padding-right: 14px;
    }
    .childBox {
      padding-left: 14px;
    }
    select {
      border: none;
      width: 100%;
    }
  }
  span {
    font-size: 12px;
    display: block;
    margin-bottom: 5px;
    font-weight: 800;
  }
  input {
    font-size: 1rem;
    border: none;
  }
  input::placeholder {
    color: #484848;
  }
  form {
    margin-top: 10px;
  }
`;
const SearchBtn = styled.button`
  width: 100%;
  font-size: 18px;
  text-align: center;
  background: #e01561;
  color: #fff;
  padding: 10px 0;
  border-radius: 12px;
  margin-top: 10px;
  font-weight: 600;
  svg {
    height: 12px;
    width: 12px;
    display: inline-block;
    fill: currentColor;
    margin-right: 6px;
  }
  border: none;
  padding: 6%;
`;

export default Detail;
