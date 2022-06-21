import React from "react";
import styled from "styled-components";
// import reset from "../reset.css";

function Main() {
  return (
    <>
      <MainBox>
        <BackImg />
        <FormBox>
          <h1>한국의 휴가 임대 시설</h1>
          <p>에어비앤비에서 독특한 숙소를 예약하세요.</p>
          <form>
            <div className="place">
              <label>
                <span>위치</span>
                <input type="text" placeholder="어디든지" defaultValue="한국" />
              </label>
            </div>
            <div className="check_date">
              <div className="checkIn">
                <label>
                  <span>체크인</span>
                  <input type="text" placeholder="날짜 입력" />
                </label>
              </div>
              <div className="checkOut">
                <label>
                  <span>체크아웃</span>
                  <input type="text" placeholder="날짜 입력" />
                </label>
              </div>
            </div>
            <div className="personCnt">
              <div className="adultBox">
                <label>
                  <span>성인</span>
                  <select name="adult" id="">
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
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
            <SearchBtn>
              <svg
                viewBox="0 0 16 16"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path>
              </svg>
              검색
            </SearchBtn>
          </form>
        </FormBox>
      </MainBox>
      <RankList>
        <h2>최고 평점을 받은 한국의 휴가용 임대 숙소</h2>
        <p>위치, 청결도 등에서 게스트의 높은 평가를 받은 숙소입니다.</p>
        <ul>
          <li>
            <div>
              <img
                src="https://a0.muscache.com/im/pictures/c2120b84-291d-4738-a911-97672d2ab3f2.jpg?im_w=1200"
                alt=""
              />
            </div>
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
              </svg>
              4.73
            </span>
            <h3>블랑드누아 (2인) blanc de noir 하귀애월해안도로</h3>
            <p>
              이천 도자 예술촌에 위치한 통기타 모양의 전원 주택입니다. 자연과
              매우 잘 어우러진 이천 도자 예술 마을에서 독특한 외관으로 유명한
              세라 기타 문화관의 3층 테라스가 넓은 독채 집입니다. 아늑하고
              따뜻한 방에서 여유로운 감성 힐링 휴가를 즐겨보세요. 높은 건물이
              없는 마을의 3층 위치에서 탁 트인 자연 경관을 즐길 수도 있고,
              통기타 집 앞에 위치한 잔디밭에서 피크닉을 즐길 수도 있습니다.
            </p>
          </li>
          <li>
            <div>
              <img
                src="https://a0.muscache.com/im/pictures/c2120b84-291d-4738-a911-97672d2ab3f2.jpg?im_w=1200"
                alt=""
              />
            </div>
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
              </svg>
              4.73
            </span>
            <h3>블랑드누아 (2인) blanc de noir 하귀애월해안도로</h3>
            <p>
              이천 도자 예술촌에 위치한 통기타 모양의 전원 주택입니다. 자연과
              매우 잘 어우러진 이천 도자 예술 마을에서 독특한 외관으로 유명한
              세라 기타 문화관의 3층 테라스가 넓은 독채 집입니다. 아늑하고
              따뜻한 방에서 여유로운 감성 힐링 휴가를 즐겨보세요. 높은 건물이
              없는 마을의 3층 위치에서 탁 트인 자연 경관을 즐길 수도 있고,
              통기타 집 앞에 위치한 잔디밭에서 피크닉을 즐길 수도 있습니다.
            </p>
          </li>
          <li>
            <div>
              <img
                src="https://a0.muscache.com/im/pictures/c2120b84-291d-4738-a911-97672d2ab3f2.jpg?im_w=1200"
                alt=""
              />
            </div>
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
              </svg>
              4.73
            </span>
            <h3>블랑드누아 (2인) blanc de noir 하귀애월해안도로</h3>
            <p>
              이천 도자 예술촌에 위치한 통기타 모양의 전원 주택입니다. 자연과
              매우 잘 어우러진 이천 도자 예술 마을에서 독특한 외관으로 유명한
              세라 기타 문화관의 3층 테라스가 넓은 독채 집입니다. 아늑하고
              따뜻한 방에서 여유로운 감성 힐링 휴가를 즐겨보세요. 높은 건물이
              없는 마을의 3층 위치에서 탁 트인 자연 경관을 즐길 수도 있고,
              통기타 집 앞에 위치한 잔디밭에서 피크닉을 즐길 수도 있습니다.
            </p>
          </li>
        </ul>
      </RankList>
      <OptionList>
        <h2>한국의 휴가용 입대 숙소의 인기 편의시설</h2>
        <ul>
          <li>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path>
            </svg>
            주방
          </li>
          <li>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"></path>
            </svg>
            무선 인터넷
          </li>
          <li>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="M24 26c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 27.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 28c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 28c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 28c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 29.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 26c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 26c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 26zm0-5c.988 0 1.945.351 2.671 1.009.306.276.71.445 1.142.483L28 22.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 23c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 23c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 23c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 24.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 21c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 21c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 21zM20 3a4 4 0 0 1 3.995 3.8L24 7v2h4v2h-4v5c.912 0 1.798.3 2.5.862l.171.147c.306.276.71.445 1.142.483L28 17.5v2l-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 18c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 18c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 18c-.503 0-.98.175-1.33.491a3.96 3.96 0 0 1-2.442 1.003L4 19.5v-2l.187-.008a1.953 1.953 0 0 0 1.142-.483A3.975 3.975 0 0 1 8 16c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492a3.956 3.956 0 0 1 2.444-1.002L16 16v-5H4V9h12V7a2 2 0 0 0-3.995-.15L12 7h-2a4 4 0 0 1 7-2.645A3.985 3.985 0 0 1 20 3zm-2 13.523c.16.091.313.194.459.307l.212.179c.35.316.826.49 1.33.491.439 0 .86-.134 1.191-.38l.137-.111c.206-.187.431-.35.67-.486V11h-4zM20 5a2 2 0 0 0-1.995 1.85L18 7v2h4V7a2 2 0 0 0-2-2z"></path>
            </svg>
            수영장
          </li>
          <li>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="M16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1zm0 2C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm2 5a5 5 0 0 1 .217 9.995L18 18h-5v6h-2V8zm0 2h-5v6h5a3 3 0 0 0 .176-5.995z"></path>
            </svg>
            건물 내 무료 주차
          </li>
        </ul>
      </OptionList>
      <List>
        <h2>한국의 다른 근사한 휴가용 임대 숙소</h2>
        <ul>
          <li>
            <div>
              <img
                src="https://a0.muscache.com/im/pictures/b538f736-29b9-4626-8eea-81284704b403.jpg?im_w=720"
                alt=""
              />
            </div>
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
              </svg>
              4.96(423)
            </span>
            <p>
              통나무집 전체
              <br />
              서나와 할아버지 통나무집
            </p>
          </li>
          <li>
            <div>
              <img
                src="https://a0.muscache.com/im/pictures/b538f736-29b9-4626-8eea-81284704b403.jpg?im_w=720"
                alt=""
              />
            </div>
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
              </svg>
              4.96(423)
            </span>
            <p>
              통나무집 전체
              <br />
              서나와 할아버지 통나무집
            </p>
          </li>
          <li>
            <div>
              <img
                src="https://a0.muscache.com/im/pictures/b538f736-29b9-4626-8eea-81284704b403.jpg?im_w=720"
                alt=""
              />
            </div>
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
              </svg>
              4.96(423)
            </span>
            <p>
              통나무집 전체
              <br />
              서나와 할아버지 통나무집
            </p>
          </li>
          <li>
            <div>
              <img
                src="https://a0.muscache.com/im/pictures/b538f736-29b9-4626-8eea-81284704b403.jpg?im_w=720"
                alt=""
              />
            </div>
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
              </svg>
              4.96(423)
            </span>
            <p>
              통나무집 전체
              <br />
              서나와 할아버지 통나무집
            </p>
          </li>
        </ul>
      </List>
    </>
  );
}

// section1
const MainBox = styled.section`
  position: relative;
  width: 1280px;
  height: 478px;
  max-width: 1280px;
  margin: 0 auto 50px;
`;

const BackImg = styled.div`
  position: absolute;
  right: 0;
  background-image: url("https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1680");
  background-size: cover;
  width: 960px;
  height: 478px;
  border-radius: 8px;
`;

const FormBox = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 420px;
  height: 396px;
  background: #fff;
  padding: 32px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
  border-radius: 12px;

  h1 {
    font-size: 34px;
    font-weight: 500;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    padding: 15px 0 10px;
    color: #717171;
  }
  .place,
  .check_date,
  .personCnt {
    width: 100%;
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
  }
  input {
    font-size: 1rem;
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
  font-size: 16px;
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
`;

// section2
const RankList = styled.section`
  position: relative;
  width: 1280px;
  max-width: 1280px;
  margin: 0 auto;
  h2 {
    font-size: 26px;
    font-weight: 500;
  }
  h3 {
    font-weight: 300;
    margin-top: 8px;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    padding: 10px 0 10px;
    color: #717171;
  }
  span {
    font-weight: 300;
    padding-top: 10px;
  }
  img {
    border-radius: 12px;
  }
  ul {
    display: flex;
  }
  li {
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    margin: 10px;
    border-radius: 12px;
    overflow: hidden;
  }
  li:first-child {
    margin-left: 0;
  }
  li:last-child {
    margin-right: 0;
  }
  li > div {
    width: 100%;
    height: 277px;
    margin-bottom: 7px;
  }
  li > p {
    font-size: 15px;
    line-height: 1.2;
    // 텍스트 ... 변경
    /* overflow: hidden;
   text-overflow: ellipsis;
   white-space: normal;
   word-wrap: break-word; */
  }
  svg {
    display: inline-block;
    height: 14px;
    width: 14px;
    color: #e01561;
    fill: currentColor;
    margin-right: 5px;
  }
`;
const OptionList = styled.section`
  position: relative;
  width: 1280px;
  max-width: 1280px;
  margin: 50px auto 0;
  h2 {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  ul {
    display: flex;
  }
  li {
    width: 15.8%;
    padding: 30px 25px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px 0px;
    cursor: pointer;
    padding: 30px 25px 30px 25px;
    /* min-width: 210px; */
    font-size: 20px;
    margin-right: 12px;
    svg {
      display: block;
      height: 30px;
      width: 30px;
      fill: #222;
      margin-bottom: 10px;
    }
  }
`;
const List = styled.section`
  position: relative;
  width: 1280px;
  max-width: 1280px;
  margin: 80px auto 50px;
  h2 {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  svg {
    display: inline-block;
    height: 14px;
    width: 14px;
    color: #e01561;
    fill: currentColor;
    margin-right: 5px;
  }
  span {
    display: inline-block;
    padding: 5px 0;
    font-weight: 300;
  }
  p {
    font-size: 16px;
    line-height: 1.2;
    font-weight: 300;
    letter-spacing: 0.3px;
  }
  img {
    border-radius: 12px;
  }
  ul {
    display: flex;
  }
  li {
    width: 308px;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    margin: 10px;
    border-radius: 12px;
    overflow: hidden;
  }
  li > div {
    width: 308px;
    height: 200px;
    margin-bottom: 7px;
  }
`;

export default Main;
