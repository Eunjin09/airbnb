import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./DetailStyle.css";
import reviewimg from "../image/reviewrank.png";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as CommentActions } from "../redux/modules/commentSlice";
import { actionCreators as ListActions } from "../redux/modules/detailSlice";
import Map from "./Map";
import { IsParking, IsWifi } from "./convienence";

function Detail(props) {
  const [isloaded, setIsloaded] = useState(false);
  const params = useParams();
  // const houseId = Number(params.id) + 1; //houseId 는 1부터 시작이라 parameter 에 1을 더해야 순서가 맞음.
  // console.log(houseId);
  const houseId = Number(params.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user_name = localStorage.getItem("user_name"); //로그인 여부 확인
  const adultcount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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

  // 숙소 정보 가져오기
  const housedraft = useSelector((state) => state.detail.list);
  const house = housedraft[0];
  // console.log(house);

  console.log(housedraft);

  // 유저 정보 가져오기
  // const user = useSelector((state) => state.user_list);
  // console.log(user);

  useEffect(() => {
    dispatch(ListActions.loadDetailDB(params.id));
    dispatch(CommentActions.loadCommentDB(params.id));
  }, []);

  return (
    <>
      (
      <OutterBox key={props}>
        <div className="TopBox">
          <section>
            <h2
              style={{
                marginBottom: "0px",
              }}
            >
              {house.houseName}
            </h2>
            <div className="SecondBox">
              <span>
                ★ 4.74 후기 {commentCnt}개 {house.address}
              </span>
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
                backgroundImage: `url(${house.image})`,
              }}
            ></div>
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
                  {user_name}님이 호스팅하는 집의 개인실
                </h2>
                <span>최대 인원 {house.personCnt}명</span>
              </div>
              <span>₩{house.price}/박</span>
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
            <p>{house.houseInfo}</p>
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
              {house.wifi ? IsWifi() : null}
              {house.parking ? IsParking() : null}
            </div>
            <Hr />
            <h2 className="BodyTitle" style={{ marginBottom: "2px" }}>
              체크인 날짜를 선택해주세요.
            </h2>
            <span
              style={{
                color: "#8e8e8e",
                fontWeight: "400",
                fontSize: "14px",
              }}
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
              <p> ★ 4.74 후기 {commentCnt}개 </p>
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
                      <select name="adult" id="adult">
                        {adultcount.map((v) => {
                          return <option value={v}>{v}</option>;
                        })}
                      </select>
                    </label>
                  </div>
                  <div className="childBox">
                    <label>
                      <span>어린이</span>
                      <select name="child" id="chile">
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
          <h2 className="BodyTitle">★ 4.74 후기﹒{commentCnt}개</h2>
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
                    dispatch(addComment());
                    // console.log(comment);
                  }}
                >
                  작성
                </button>
              )}
            </div>
            <div>
              <div className="CommentList">
                {moreComment.map((commentvalue, index) => {
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
                          <span>{commentvalue.comment}</span>
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
                              dispatch(
                                CommentActions.deleteCommentDB(commentvalue.id)
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
              <button onClick={() => setLimit((prev) => prev + 2)}>
                더보기
              </button>
            </div>
            <Hr />
            {/* 숙소 지도 */}
            <h2 className="BodyTitle">호스팅 지역</h2>
            <div
              id="map"
              style={{
                width: "1120px",
                height: "480px",
                filter: "brightness(103%)",
                marginBottom: "3%",
              }}
            >
              <Map />
            </div>
            {house.address}
            <Hr />
            <h2 className="BodyTitle">호스트: {user_name}님</h2>
          </div>
        </div>
      </OutterBox>
      )
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
