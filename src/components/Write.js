import React from "react";
import styled from "styled-components";
import DaumPostCode from "react-daum-postcode";
import { useState } from "react";
import { useRef } from "react";
import GlobalStyle from "./GlobalStyle";
import { useDispatch } from "react-redux";
import { addPostDB } from "../redux/modules/listSlice";

// 파이어베이스 (이미지업로드)
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Write() {
  const dispatch = useDispatch();
  // 주소 찾기 모달 상태(opend-> 불리언값으로 한번에 보이도록 하자)
  const [opened, setOpened] = useState();

  // 사진 업로드
  // const fileInput = useRef(null);
  // const [imgUrl, setImgUrl] = React.useState(null)

  // 파일 첨부시 이벤트 발생
  const uploadImg = async (e) => {
    // const file_path = 'image/' + new Date().getTime()
    // const uploaded_file = await uploadBytes(ref(storage, file_path), e.target.files[0])
    // const file_url = await getDownloadURL(uploaded_file.ref)
    // thumbnail_ref.current = { url: file_url }
    // setImgUrl(thumbnail_ref.current.url)
  };

  // 이미지 업로드
  const fileInput = React.useRef();
  const file_link_ref = React.useRef(null);

  // 기본 이미지
  const [files, setFiles] = useState(
    "https://user-images.githubusercontent.com/75834421/124501682-fb25fd00-ddfc-11eb-93ec-c0330dff399b.jpg"
  );

  const uploadFB = async (e) => {
    const upload_file = e.target.files[0];
    const uploaded_file = await uploadBytes(
      ref(storage, `images/${upload_file.name}`),
      upload_file
    );

    const file_url = await getDownloadURL(uploaded_file.ref);
    console.log(file_url); //이미지 url
    file_link_ref.current = { url: file_url };
    setFiles(file_link_ref.current?.url);
    console.log(files);
  };

  // input 리스트
  const [getInputs, setInputs] = useState({
    address: "",
    houseName: "",
    houseInfo: "",
    price: "",
    personCnt: "",
    wifi: "",
    parking: "",
    image: "",
  });

  const { address, houseName, houseInfo, price, personCnt, wifi, parking } =
    getInputs;

  // 금액 콤마
  const [enteredNum, setEnterdNum] = useState();

  // const [enteredNum, setEnterdNum] = useState();

  // 컴마 기능
  const priceComma = (e) => {
    let value = e.target.value;
    console.log(value);
    value = Number(value.replaceAll(",", ""));
    if (isNaN(value)) {
      //NaN인지 판별
      value = 0;
    } else {
      setEnterdNum(value.toLocaleString("ko-KR"));
    }
    setInputs((prev) => ({ ...prev, price: value }));
  };

  // 콤마제거
  const commaRemovePrice = enteredNum?.replace(/,/g, "");
  let numberPrice = parseInt(commaRemovePrice); // 변경된 값 리스트에 보내줄때

  // 작성시 검사
  const checked = (data) => {
    let array = [
      houseName,
      address,
      houseInfo,
      price,
      personCnt,
      wifi,
      parking,
    ];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "") {
        alert("내용을 입력해주세요!");
        break;
      }
      return true;
    }
  };

  // 작성하기 버튼 눌렀을때 :)
  const writeSubmit = () => {
    const a = getInputs;

    const aa = Number(a.wifi);
    a.wifi = aa;

    if (a.wifi === 1) {
      a.wifi = true;
    }
    if (a.wifi === 0) {
      a.wifi = false;
    }

    const bb = Number(a.parking);
    a.parking = bb;

    if (a.parking === 1) {
      a.parking = true;
    }
    if (a.parking === 0) {
      a.parking = false;
    }

    getInputs.image = files;

    if (checked(getInputs) === true) {
      dispatch(addPostDB(getInputs));
    }
  };

  // 선택한 레이아웃
  const [layout, setLayout] = useState(null);

  // input 작성시 변수에 담기
  const onChange = (e) => {
    console.log(fileInput.current.value);
    const { name, value } = e.target;

    setInputs({
      ...getInputs,
      [name]: value,
    });
  };

  const is_checked = (e) => {
    const { name } = e.target;
    if (e.target.checked) {
      setLayout(!layout);
      setInputs({
        ...getInputs,
        [name]: layout,
      });
      console.log(wifi, parking);
    }
  };

  // 주소 찾기 값 input에 전달
  const onComplete = (data) => {
    setInputs((prev) => ({ ...prev, address: data.address }));
    setOpened(false);
  };

  // 주소 찾기 스타일
  const postCodeStyle = {
    padding: "30px",
    background: "white",
    width: "50%",
    height: "500px",
    border: "2px solid #d2d2d2",
    position: "absolute",
  };

  return (
    <>
      <GlobalStyle />
      <div style={{ display: "flex" }}>
        <ScreenLeft>
          <h1>여러분의 집을 호스팅 해보세요!</h1>
        </ScreenLeft>
        <ScreenRight>
          <InputBox>
            <Textarea>숙소 주소를 입력해주세요</Textarea>
            <Inputarea
              name="address"
              value={address || ""}
              onChange={onChange}
            />
            <button
              onClick={() => {
                setOpened(true);
              }}
            >
              주소찾기
            </button>
          </InputBox>
          {opened ? (
            <div>
              <DaumPostCode style={postCodeStyle} onComplete={onComplete} />
            </div>
          ) : null}
          <InputBox>
            <Textarea>당신의 숙소 이름을 정해보세요!</Textarea>
            <Inputarea name="houseName" value={houseName} onChange={onChange} />
          </InputBox>
          <InputBox>
            <Textarea>5개의 사진을 올려주세요!</Textarea>
            <label htmlFor="file" className="fileBox">
              사진 업로드하기
            </label>
            <input
              style={{ marginTop: "0px", height: "40px", width: "0px" }}
              accept="image/*"
              type="file"
              ref={fileInput}
              multiple
              id="file"
              onChange={uploadFB}
            />
          </InputBox>
          <InputBox>
            <Textarea>
              숙소 금액입력 <span>(1박기준)</span>
            </Textarea>
            <Inputarea
              name="price"
              value={enteredNum || ""}
              onChange={priceComma}
            />
          </InputBox>
          <InputBox>
            <Textarea>여러분의 숙소를 소개해주세요!</Textarea>
            <Inputarea name="houseInfo" value={houseInfo} onChange={onChange} />
          </InputBox>
          <InputBox>
            <Select name="personCnt" value={personCnt} onChange={onChange}>
              <option>인원수</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </Select>
            <Select name="wifi" value={wifi} onChange={onChange}>
              <option>와이파이</option>
              <option value={1}>와이파이 있음</option>
              <option value={0}>와이파이 없음</option>
            </Select>
            <Select name="parking" value={parking} onChange={onChange}>
              <option>주차 공간</option>
              <option value={1}>주차 가능</option>
              <option value={0}>주차 불가능</option>
            </Select>
          </InputBox>
          <Submit onClick={writeSubmit}>호스팅 하기</Submit>
        </ScreenRight>
      </div>
    </>
  );
}

const ScreenLeft = styled.div`
  position: relative;
  width: 50vw;
  height: 100vh;
  background: linear-gradient(178.4deg, #d32677 1.28%, #441ca2 79.48%);
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 40px;
    width: 80%;
    text-align: center;
  }
`;
const ScreenRight = styled.div`
  position: relative;
  width: 50vw;
  height: 100vh;
  background: white;
  padding: 22px 80px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const InputBox = styled.div`
  margin-bottom: 24px;
  text-align: left;
  box-sizing: border-box;

  button {
    font-size: 16px;
    margin-top: 8px;
    border: none;
    border-radius: 10px;
    width: 150px;
    height: 40px;
  }

  .fileBox {
    background: #8a4396;
    padding: 10px 25px;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
  }
`;
const Textarea = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  span {
    display: inline-block;
    font-size: 12px;
    margin-top: 2px;
  }
`;
const Inputarea = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #d2d2d2;
`;
const Select = styled.select`
  font-size: 15px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  text-align: center;
  background: #eee;
  font-weight: bold;
  margin-right: 20px;
  margin-top: 10px;
`;
const Submit = styled.button`
  width: 150px;
  padding: 10px 30px;
  margin-top: 10px;
  font-size: 16px;
  color: white;
  background: blue;
  border: none;
  border-radius: 12px;
  font-weight: bold;
`;
export default Write;
