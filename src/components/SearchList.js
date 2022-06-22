import React, { useEffect } from "react";
import styled from "styled-components";
// import searchPlace from "./SearchPlace";
import GlobalStyle from "./GlobalStyle";
import { useSelector } from "react-redux";
import { loadPostDB } from "../redux/modules/listSlice";
import { useDispatch } from "react-redux";



const SearchList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostDB());
  }, []);

  const { kakao } = window;

  const post_list = useSelector((state) => state.post.post_list)
  console.log(post_list);

  useEffect(() => {
    // 지도 불러오기
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();


    // 주소로 좌표를 검색합니다
    geocoder.addressSearch('서울 성동구 아차산로 2-1', function (result, status) {

      // 정상적으로 검색이 완료됐으면 
      if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        // map.setCenter(coords);
      }
    });

    // 커스텀 오버레이를 지도에 표시합니다
    // customOverlay.setMap(map);
    // 마커를 표시할 위치와 title 객체 배열입니다 
    var positions = [
      {
        title: '카카오',
        latlng: new kakao.maps.LatLng(33.450705, 126.570677)
      },
      {
        title: '생태연못',
        latlng: new kakao.maps.LatLng(33.450936, 126.569477)
      },
      {
        title: '텃밭',
        latlng: new kakao.maps.LatLng(33.450879, 126.569940)
      },
      {
        title: '근린공원',
        latlng: new kakao.maps.LatLng(33.451393, 126.570738)
      }
    ];

    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {

      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다    
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage // 마커 이미지 
      });
    }
  }, []);



  // []를 없애면 MapContainer가 SearchPlace 컴포넌트 안에 있어 inputText 상태가 바뀔 때 마다 렌더링이 계속 될 것이다. 이를 방지하기 위해 MapContainer 안에 있는 useEffect 두 번째 파라미터 [] 안에 searchPlace를 넣어준다. 그러면 지도는 검색 결과가 바뀔 때만 렌더링을 다시 할 것이다.
  return (
    <>
      <GlobalStyle />
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
              {post_list.map((post, idx) => {
                return (
                  <li key={idx}>
                    <ImgBox><img src={post.image} alt="" /></ImgBox>
                    <h3>{post.houseName}</h3>
                    <span>4.73<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" ></path></svg></span>
                    <div>{post.personCnt}명</div>
                    <p>₩{post.price}/박</p>
                  </li>
                )
              })}
            </ul>
          </ListBox>
        </List>
        <Map id="myMap">

        </Map>
      </Wrap>
    </>
  )
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
const Overlay = styled.div`
  background: gold;
`
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
const ImgBox = styled.div`
 width: 100%;
  height: 16vw;
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
