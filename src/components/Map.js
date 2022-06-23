/* global kakao */
import React, { useEffect } from "react";
// import cn from "classnames";
// import "../styles/Map.scss";

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(33.4837943, 126.394496),
      level: 5,
    };

    let map = new window.kakao.maps.Map(container, options);

    // 지도를 클릭한 위치에 표출할 마커입니다
    var marker = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: map.getCenter(),
    });
    // 지도에 마커를 표시합니다
    marker.setMap(map);

    console.log("loading kakaomap");
  }, []);

  return (
    // <div className={cn("Map")}>
    // <div className={cn("MapContainer")} id="map"></div>
    <div id="map"></div>
    // </div>
  );
};

export default Map;
