import React from "react";
import styled from "styled-components";
import Header from "./Header";

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
            <SearchBtn><svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"><path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>검색</SearchBtn>
          </form>
        </FormBox>
      </MainBox>
      <RankList>
        <h2>최고 평점을 받은 한국의 휴가용 임대 숙소</h2>
        <p>위치, 청결도 등에서 게스트의 높은 평가를 받은 숙소입니다.</p>
        <ul>
          <li>
            <div><img src="https://a0.muscache.com/im/pictures/c2120b84-291d-4738-a911-97672d2ab3f2.jpg?im_w=1200" alt="" /></div>
            <span><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" ></path></svg>4.73</span>
            <h3>블랑드누아 (2인) blanc de noir 하귀애월해안도로</h3>
            <p>
              이천 도자 예술촌에 위치한 통기타 모양의 전원 주택입니다. 자연과 매우 잘 어우러진 이천 도자 예술 마을에서 독특한 외관으로 유명한 세라 기타 문화관의 3층 테라스가 넓은 독채 집입니다. 아늑하고 따뜻한 방에서 여유로운 감성 힐링 휴가를 즐겨보세요. 높은 건물이 없는 마을의 3층 위치에서 탁 트인 자연 경관을 즐길 수도 있고, 통기타 집 앞에 위치한 잔디밭에서 피크닉을 즐길 수도 있습니다.
            </p>
          </li>
          <li>
            <div><img src="https://a0.muscache.com/im/pictures/c2120b84-291d-4738-a911-97672d2ab3f2.jpg?im_w=1200" alt="" /></div>
            <span><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path></svg>4.73</span>
            <h3>블랑드누아 (2인) blanc de noir 하귀애월해안도로</h3>
            <p>
              이천 도자 예술촌에 위치한 통기타 모양의 전원 주택입니다. 자연과 매우 잘 어우러진 이천 도자 예술 마을에서 독특한 외관으로 유명한 세라 기타 문화관의 3층 테라스가 넓은 독채 집입니다. 아늑하고 따뜻한 방에서 여유로운 감성 힐링 휴가를 즐겨보세요. 높은 건물이 없는 마을의 3층 위치에서 탁 트인 자연 경관을 즐길 수도 있고, 통기타 집 앞에 위치한 잔디밭에서 피크닉을 즐길 수도 있습니다.
            </p>
          </li>
          <li>
            <div><img src="https://a0.muscache.com/im/pictures/c2120b84-291d-4738-a911-97672d2ab3f2.jpg?im_w=1200" alt="" /></div>
            <span><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path></svg>4.73</span>
            <h3>블랑드누아 (2인) blanc de noir 하귀애월해안도로</h3>
            <p>
              이천 도자 예술촌에 위치한 통기타 모양의 전원 주택입니다. 자연과 매우 잘 어우러진 이천 도자 예술 마을에서 독특한 외관으로 유명한 세라 기타 문화관의 3층 테라스가 넓은 독채 집입니다. 아늑하고 따뜻한 방에서 여유로운 감성 힐링 휴가를 즐겨보세요. 높은 건물이 없는 마을의 3층 위치에서 탁 트인 자연 경관을 즐길 수도 있고, 통기타 집 앞에 위치한 잔디밭에서 피크닉을 즐길 수도 있습니다.
            </p>
          </li>
        </ul>
      </RankList>
      <OptionList>
        <h2>한국의 휴가용 입대 숙소의 인기 편의시설</h2>
        <ul>
          <li>무선 인터넷</li>
          <li>건물 내 무료 주차</li>
        </ul>
      </OptionList>
      <List>
        <div><img src="" alt="" /></div>
        <p>동나무집 전체<br />서나와 할아버지 통나무집</p>
      </List>
    </>
  )
}

// section1
const MainBox = styled.section`
position: relative;
width: 1280px;
height: 478px;
max-width: 1280px;
  margin:  0 auto 50px;
`

const BackImg = styled.div`
position: absolute;
right:0;
  background-image: url("https://a0.muscache.com/im/pictures/81dca5d6-5a86-49bc-8eca-4a8610a07d27.jpg?im_w=1680");
  background-size: cover;
  width: 960px;
  height: 478px;
  border-radius: 8px;
`

const FormBox = styled.div`
  position: absolute;
  left:0; top: 50%;
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
  .place, .check_date, .personCnt {
    width:100%;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding:8px 14px;
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
      width:100%;
    }
  }
  span {
    font-size : 12px;
    display:block;
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
`
const SearchBtn = styled.button`
  width: 100%;
  font-size: 16px;
  text-align: center;
  background: #E01561;
  color: #fff;
  padding: 10px 0;
  border-radius: 12px;
  margin-top: 10px;
  svg {
    height:12px;
    width:12px;
    display:inline-block;
    fill:currentColor;
    margin-right: 6px;
  }
`


// section2
const RankList = styled.section`
position: relative;
width: 1280px;
max-width: 1280px;
margin:0 auto;
h2 {
  font-size:26px;
  font-weight: 500;
}
h3 {
  font-weight: 300;
  margin-top : 8px;
}
p {
  font-size: 16px;
  font-weight: 300;
  padding: 10px 0 10px;
  color: #717171;
}
span {
  font-weight : 300;
  padding-top : 10px;
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
li:first-child{
  margin-left: 0;
}
li:last-child{
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
  display:inline-block;
  height:14px;
  width:14px;
  color: #E01561;
  fill:currentColor;
  margin-right: 5px;
}

`
const OptionList = styled.section`
position: relative;
width: 1280px;
max-width: 1280px;
margin:0 auto;
h2 {
  font-size:26px;
  font-weight: 500;
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

`
const List = styled.section`

`


export default Main;
