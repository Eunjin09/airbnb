import React, { useEffect } from "react";
import styled from "styled-components";
import "./DetailStyle.css";
import "./Calendar.css";
import { Calendar, CalendarNext } from "./Calendar";
import reviewimg from "../image/reviewrank.png";
import safeimg from "../image/safeimg.svg";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as ListActions } from "../redux/modules/detailSlice";
import { deletePostDB } from "../redux/modules/listSlice";
import { IsParking, IsWifi } from "./convienence";
import Comment from "./Comment";
import Map from "./Map";

function Detail(props) {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adultcount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  //댓글 불러오기 (commentCnt 필요해서)
  const commentsList = useSelector((state) => state.comment.list);
  const commentCnt = commentsList.length;

  const user_name = localStorage.getItem("user_name"); //로그인 여부 확인

  // 숙소 정보 가져오기
  const housedraft = useSelector((state) => state.detail.list);
  // console.log(housedraft);
  const house = housedraft[0];
  const price = Number(house.price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // console.log(price);

  useEffect(() => {
    dispatch(ListActions.loadDetailDB(params.id));
  }, []);

  return (
    <div style={{ borderTop: "1px solid #ddd" }}>
      <OutterBox key={props}>
        <div className="TopBox">
          <section>
            <h2
              style={{
                marginBottom: "1%",
              }}
            >
              {house.houseName}
            </h2>
            <div className="SecondBox">
              <span>
                ★ 4.74﹒
                <span
                  style={{ textDecoration: "underline", fontWeight: "600" }}
                >
                  후기 {commentCnt}개
                </span>
                ﹒슈퍼호스트﹒
                <span
                  style={{ textDecoration: "underline", fontWeight: "600" }}
                >
                  {house.address}
                </span>
              </span>

              {user_name ? (
                <div
                  style={{
                    width: "100%",
                    maxWidth: "150px",
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "1%",
                  }}
                >
                  <button
                    className="ButtonTransparent"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch(deletePostDB(params.id));
                    }}
                  >
                    삭제
                  </button>
                  <button
                    className="ButtonTransparent"
                    onClick={() => {
                      navigate(`/edit/` + params.id);
                    }}
                  >
                    수정
                  </button>
                  <button className="ButtonTransparent">♡ 저장</button>
                </div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    maxWidth: "150px",
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "1%",
                  }}
                >
                  <button
                    className="ButtonTransparent"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      alert("로그인이 필요합니다.");
                    }}
                  >
                    삭제
                  </button>
                  <button
                    className="ButtonTransparent"
                    onClick={() => {
                      alert("로그인이 필요합니다.");
                    }}
                  >
                    수정
                  </button>
                  <button className="ButtonTransparent">♡ 저장</button>
                </div>
              )}
            </div>
          </section>
          <div className="ImageBox">
            <BigImage
              style={{
                backgroundImage: `url(${house.image})`,
              }}
            ></BigImage>
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
                    marginBottom: "1%",
                  }}
                >
                  {house.nickName}님이 호스팅하는 집의 개인실
                </h2>
                <span>최대 인원 {house.personCnt}명</span>
              </div>
              <span>₩{price} /박</span>
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
            <div className="Calendar">
              <Calendar />
              <CalendarNext />
            </div>
          </InfoOutterBox>
          <div
            style={{
              width: "350px",
              backgroundSize: "cover",
              position: "relative",
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
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    height: "16px",
                    width: "16px",
                    fill: "currentcolor",
                    marginRight: "5%",
                  }}
                >
                  <path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l.115-.006a1 1 0 0 0 .847-1.269L27.039 14l1.923-6.724A1 1 0 0 0 28 6z"></path>
                </svg>{" "}
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
            <Comment />
            {/* 숙소 지도 */}
            <h2 className="BodyTitle">호스팅 지역</h2>
            <div
              id="map"
              style={{
                width: "1120px",
                height: "480px",
                filter: "brightness(107%) saturate(140%) hue-rotate(-10deg)",
                marginBottom: "3%",
              }}
            >
              <Map />
            </div>
            <div style={{ fontWeight: "600", marginBottom: "1%" }}>
              {house.address}
            </div>
            <p>
              일단 걸어볼까요.
              <br /> 주변의 맛집들이 기다리고 있습니다...!!
            </p>
            <span style={{ fontWeight: "600", textDecoration: "underline" }}>
              더 보기
            </span>{" "}
            ＞
            <Hr />
            <h2 className="BodyTitle">호스트: {house.nickName}님</h2>
            <div style={{ display: "flex", margin: "auto" }}>
              <div style={{ width: "300px" }}>
                모던한 스타일의 인테리어를 자랑하는 감성충만 스테이입니다. 가족,
                연인, 친구와 소중한 추억을 만들어 가세요.
                <div>
                  <br />
                  <p style={{ fontWeight: "600" }}>숙박 중 게스트와의 교류</p>
                  숙소 맞은 편 파란 지붕집에서 도움을 드리고 있습니다.
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",
                  marginLeft: "3%",
                }}
              >
                <span>응답률: 100%</span>
                <span>응답 시간: 1시간 이내</span>
                <br />
                <HostButton>호스트에게 연락하기</HostButton>

                <div
                  style={{
                    width: "100%",
                    maxWidth: "500px",
                    display: "flex",
                    gap: "2%",
                    marginTop: "6%",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: "100%", maxWidth: "30px" }}>
                    <img src={safeimg} alt="safeimg" />
                  </div>

                  <span style={{ fontSize: "13px" }}>
                    안전한 결제를 위해 에어비앤비 웹사이트나 앱 외부에서
                    송금하거나 대화를 나누지 마세요.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OutterBox>
    </div>
  );
}

const OutterBox = styled.div`
  width: 95%;
  max-width: 1120px;
  margin: auto;
`;

const BigImage = styled.div`
  margin: 0.5%;
  width: 100%;
  max-width: 56vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-top-left-radius: 5%;
  border-bottom-left-radius: 5%;
  &:hover {
    filter: brightness(70%);
  }
`;

const SmallImageBox = styled.div`
  width: 100%;
  max-width: 28vw;
  margin: 1%;
  height: 20vh;
  background-size: cover;
  &:hover {
    filter: brightness(70%);
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

const HostButton = styled.div`
  border: 1px solid;
  padding: 13px 23px;
  width: 150px;
  height: auto;
  font-weight: 600;
  border-radius: 8px;
  text-align: center;
`;

export default Detail;