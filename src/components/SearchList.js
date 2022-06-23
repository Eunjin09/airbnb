import React, { useEffect } from "react";
import styled from "styled-components";
// import searchPlace from "./SearchPlace";
import GlobalStyle from "./GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { loadPostDB } from "../redux/modules/listSlice";
import { useNavigate } from "react-router-dom";

const SearchList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadPostDB());
  }, []);

  const post_list = useSelector((state) => state.post.post_list);

  console.log(post_list.length);

  const { kakao } = window;
  useEffect(() => {
    // 지도 불러오기
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    //기본 지도
    const map = new kakao.maps.Map(container, options);

    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    // 지도에 여러 개의 마커를 표시할 때 위치
    const bounds = new kakao.maps.LatLngBounds();

    const points = [];

    for (let i = 0; i < post_list.length; i++) {
      // 주소-좌표 변환 객체를 생성합니다
      var geocoder = new kakao.maps.services.Geocoder();

      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(post_list[i].address, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          points.push(new kakao.maps.LatLng(result[0].y, result[0].x));

          let content = `<div class ="label"><span class="left"></span><span class="center">₩${post_list[i].price}</span><span class="right"></span></div>`;
          // 커스텀 오버레이를 생성합니다
          let customOverlay = new kakao.maps.CustomOverlay({
            position: coords,
            content: content,
          });

          // 커스텀 오버레이를 지도에 표시합니다
          customOverlay.setMap(map);
        }

        let boundss = new kakao.maps.LatLngBounds();

        let marker;

        for (let i = 0; i < points.length; i++) {
          marker = new kakao.maps.Marker({ position: points[i] });
          marker.setMap(null);
          boundss.extend(points[i]);
        }
        function setBounds() {
          map.setBounds(boundss);
        }
        setBounds();
      });
    }
  });
  return (
    <>
      <GlobalStyle />
      <Wrap style={{ display: "flex" }}>
        <List>
          <ListHeader>
            <span>숙소 {post_list.length}개</span>
            <button>
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              </svg>
              필터
            </button>
          </ListHeader>
          <ListBox>
            <ul>
              {post_list.map((post, idx) => {
                return (
                  <li key={idx} onClick={() => navigate("/detail/" + post.id)}>
                    <ImgBox>
                      <img src={post.image} alt="" />
                    </ImgBox>
                    <h3>{post.houseName}</h3>
                    <span>
                      4.73
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                      >
                        <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path>
                      </svg>
                    </span>
                    <div>{post.personCnt}명</div>
                    <p>₩{post.price}/박</p>
                  </li>
                );
              })}
            </ul>
          </ListBox>
        </List>
        <Map id="myMap"></Map>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100%;
  background: white;
  display: flex;
  float: left;
  .overlay {
    background: gold;
  }
  .label {
    padding: 5px 10px;
    background: #fff;
    border-radius: 28px;
    font-weight: 600;
    font-size: 14px;
  }
`;
// 검색 결과 박스
const List = styled.div`
  width: 42vw;
  height: 87vh;
  padding-top: 10px;
  overflow: scroll;
  z-index: 5;
`;

const ListHeader = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  background: #fff;
  overflow: hidden;
  span {
    font-size: 16px;
    font-weight: 500;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  button {
    float: right;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #ddd;
    padding: 7px 0;
    width: 82px;
    height: 40px;
    text-align: center;
    border-radius: 12px;
    background: none;
  }
  svg {
    display: inline-block;
    height: 17px;
    width: 17px;
    margin-right: 5px;
    fill: currentcolor;
  }
`;
const ImgBox = styled.div`
  width: 100%;
  height: 16vw;
  margin-bottom: 10px;
`
// 검색 결과 리스트
const ListBox = styled.div`
  padding: 0 10px;
  ul {
    flex-wrap: wrap;
    display: flex;
    flex-flow: row wrap;
     justify-content: space-between;
  width: 100%;
}
li {
  padding: 10px;
  width: 50%;
  flex-wrap: wrap;
  border-radius: 12px;
  h3 {
    display : inline-block;
    font-weight: 600;
  }
  img {
    height: 100%;
    border-radius: 12px;
    img {
      height: 100%;
      border-radius: 12px;
    }
    svg {
      width: 10px;
      height: 10px;
    }
  }
  svg {
    width: 10px;height: 10px;
  }
  span {
    display: block;
    float : right;
    font-weight : 300;
    font-size: 14px;
  }
  div {
    color:#ddd;
    font-weight: 400;
    margin: 5px 0;
  }
}
`




// 지도 박스
const Map = styled.div`
  width: 58vw;
  height: 88vh;
  background: rgb(238, 238, 238);
`;
export default SearchList;
