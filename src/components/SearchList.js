import React, { useEffect } from "react";
import styled from "styled-components";
// import searchPlace from "./SearchPlace";



const SearchList = () => {

  const { kakao } = window;
  useEffect(() => {
    // 지도 불러오기
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);

    /* ------장소 검색 결과를 카카오 지도에 나타내기-------- */

    // 장소 검색 객체를 생성
    const ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색
    ps.keywordSearch('입력 값', placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정
        map.setBounds(bounds);
      }
    }
    // 지도에 마커를 표시하는 함수
    function displayMarker(place) {

      // 마커를 생성하고 지도에 표시
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x)
      });

      // 마커를 클릭 했을 때 장소 이름을 나타내는 코드
      let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

      // 마커에 클릭이벤트를 등록
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
      });
    }


  }, []);

  // []를 없애면 MapContainer가 SearchPlace 컴포넌트 안에 있어 inputText 상태가 바뀔 때 마다 렌더링이 계속 될 것이다. 이를 방지하기 위해 MapContainer 안에 있는 useEffect 두 번째 파라미터 [] 안에 searchPlace를 넣어준다. 그러면 지도는 검색 결과가 바뀔 때만 렌더링을 다시 할 것이다.


  return (
    <Wrap style={{ display: 'flex' }}>
      <List>
        <ListHeader>
          <span>숙소 191개</span>
          <button>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
              <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>필터
          </button>
        </ListHeader>
        <ListBox>
          <ul>
            <li>
              <div><img src="https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720" alt="" /></div>
              <h3>Sindun-myeon, Icheon-si의 전원주택</h3>
              <span>4.73<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" ></path></svg></span>
              <div>4명</div>
              <p>₩104,679/박</p>
            </li>
            <li>
              <div><img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-53347106/original/1f599e62-50de-4e94-9bea-47556dc7f65d.jpeg?im_w=720" alt="" /></div>
              <h3>Sindun-myeon, Icheon-si의 전원주택</h3>
              <span>4.73<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" ></path></svg></span>
              <div>4명</div>
              <p>₩104,679/박</p>
            </li>
            <li>
              <div><img src="https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720" alt="" /></div>
              <h3>Sindun-myeon, Icheon-si의 전원주택</h3>
              <span>4.73<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" ></path></svg></span>
              <div>4명</div>
              <p>₩104,679/박</p>
            </li>
            <li>
              <div><img src="https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720" alt="" /></div>
              <h3>Sindun-myeon, Icheon-si의 전원주택</h3>
              <span>4.73<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" ></path></svg></span>
              <div>4명</div>
              <p>₩104,679/박</p>
            </li>
            <li>
              <div><img src="https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720" alt="" /></div>
              <h3>Sindun-myeon, Icheon-si의 전원주택</h3>
              <span>4.73<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" ></path></svg></span>
              <div>4명</div>
              <p>₩104,679/박</p>
            </li>
          </ul>
        </ListBox>
      </List>
      <Map id="myMap">

      </Map>
    </Wrap>
  )
};

const Wrap = styled.div`
    width: 100vw;
    height: 100%;
    background: white;
    display: flex;
    float: left;
`
// 검색 결과 박스
const List = styled.div`
  width: 42vw;
  height: 87vh;
  padding-top: 10px;
  overflow: scroll;
  z-index: 5;
`
// 검색 리스트 헤더
const ListHeader = styled.div`
  position: relative;
  width:100%;
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
	/* align-content: stretch; */
}
li {
  padding: 10px;
  width: 50%;
  flex-wrap: wrap;
  /* flex: auto; */
  /* display: grid;
  grid-template-columns: 100%; */
  /* margin: 10px; */
  border-radius: 12px;
  li>div {
    width: 100%;
    height: 324px;
  }
  img {
    height: 100%;
    border-radius: 12px;
  }
  svg {
    width: 10px;height: 10px;
  }
}
`




// 지도 박스
const Map = styled.div`
  width: 58vw;
  height: 88vh;
  background: rgb(238, 238, 238);
  
`
export default SearchList;
