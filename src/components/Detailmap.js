// /* global kakao */
// import React, { useEffect } from "react";

// const { kakao } = window;

// const Map = () => {
//   useEffect(() => {
//     let container = document.getElementById("map");

//     let options = {
//       center: new window.kakao.maps.LatLng(35.85133, 127.734086),
//       level: 13,
//     };

//     let map = new window.kakao.maps.Map(container, options);

//     // 지도를 클릭한 위치에 표출할 마커입니다
//     var marker = new kakao.maps.Marker({
//       // 지도 중심좌표에 마커를 생성합니다
//       position: map.getCenter(),
//     });
//     // 지도에 마커를 표시합니다
//     marker.setMap(map);

//     console.log("loading kakaomap");
//   }, []);

//   return <div id="map" style={{ width: "500px", height: "500px" }}></div>;
// };

// export default Map;
