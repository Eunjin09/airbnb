import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Overlay.css';

const { kakao } = window;

const MapContainer = ({ productInfos }) => {
  const location = useLocation();
  // 지도 불러오기
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 10,
    };

    mapRef.current = new kakao.maps.Map(container, options);
  }, [location]);

  const mapRef = useRef();

  // 마커 그리기
  // 백엔드로부터 받아온 데이터중에서 마커를 표시할 좌표와 커스텀 오버레이 작성을 위해 필요한 정보를 추출
  useEffect(() => {
    const overlayInfos = productInfos?.map(info => {
      return {
        title: info.name,
        lat: info.latitude,
        lng: info.longtitude,
        img: info.image_url[0],
        price: info.price,
        region: info.region,
        desc: info.description,
      };
    });
    // 추출한 정보를 forEach를 통해 반복문을 돌리며, new kakao.maps.Marker({마커가 표시될 지도, 마커가 표시될 좌표})를 통해 해당 좌표에 마커를 찍게 된다.
    overlayInfos.forEach(el => {
      let marker = new kakao.maps.Marker({
        map: mapRef.current,
        position: new kakao.maps.LatLng(el.lat, el.lng),
        title: el.title,
      });

      // 3번부분
      let content =
        '<div class="overlayWrap">' +
        `    <img class="overlayImg" src=${el.img}/>` +
        '    <div class="accommInfoWrap">' +
        `        <h1 class="accommName">${el.title}</h1>` +
        `        <p class="accommRegion">${el.region}</p>` +
        `        <p class="accommDesc">${el.desc}</p>` +
        `        <p class="accommPrice">${Number(
          el.price
        ).toLocaleString()}</p>` +
        '    </div>' +
        '    <div class="overlayArrow">' +
        '</div>';

      let position = new kakao.maps.LatLng(el.lat, el.lng);
      // 커스텀 오버레이 ({오러베이 좌표, string타입으로 작성된 html})
      let customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content, //string타입만을 받기 때문에 컴포넌트가 들어갈 수 없다. 따라서 번거롭지만 위 3번과 같이 작성을 해야한다.
      });
      // 커스텀 오버레이를 생성한 이후, 마커에 mouseover이벤트가 일어날 경우에만 오버레이를 보여줄 것이기 때문에
      // 다음과 같이 customOverlay.setMap을 통해 이벤트가 발생할 때 오버레이가 나타나게끔 해주었고
      // mouseout 이벤트가 발생했을 때에는 아무것도 전달해주지 않으면 커스텀 오버레이가 그려지지 않습니다.
      kakao.maps.event.addListener(marker, 'mouseover', function () {
        customOverlay.setMap(mapRef.current);
      });

      kakao.maps.event.addListener(marker, 'mouseout', function () {
        setTimeout(function () {
          customOverlay.setMap();
        });
      });
    });
  }, [productInfos]);

  return (
    <div
      id="myMap"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default MapContainer;