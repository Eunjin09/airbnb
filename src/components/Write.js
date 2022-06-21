import React from "react";
import styled from "styled-components";
import DaumPostCode from "react-daum-postcode";
import { useState } from "react";
import { useRef } from "react";

function Write() {
  // 주소 찾기 모달 상태
  const [getOpen, setOpen] = useState(false);

  // 사진 업로드
  const fileInput = useRef(null);

  // input 리스트
  const [getInputs, setInputs] = useState({
    houseName: "",
    address: "",
    houseInfo: "",
    price: "",
    personCnt: "",
    wifi: "",
    parking: "",
    laundry: "",
  });

  const {
    houseName,
    address,
    houseInfo,
    price,
    personCnt,
    wifi,
    parking,
    laundry,
  } = getInputs;

  // input 작성시 변수에 담기
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...getInputs,
      [name]: value,
    });
  };

  // 금액 콤마
  const [enteredNum, setEnterdNum] = useState();

  // 컴마 기능
  const priceComma = (e) => {
    let value = e.target.value;
    value = Number(value.replaceAll(",", ""));
    if (isNaN(value)) {
      //NaN인지 판별
      value = 0;
    } else {
      setEnterdNum(value.toLocaleString("ko-KR"));
    }
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
      laundry,
    ];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "") {
        alert("내용을 입력해주세요!");
        break;
      } else {
        if (array[i + 4]) {
          if (
            array[4] === "인원수" ||
            array[5] === "와이파이" ||
            array[6] === "주차공간" ||
            array[7] === "세탁시설"
          ) {
            alert("카테고리를 입력해주세요!");
            break;
          }
        }
        if (array[array.length - 1]) {
          if (array[array.length - 1] !== "") {
            return true;
          }
        }
      }
    }
  };
  // 주소 찾기 스타일
  const postCodeStyle = {
    display: getOpen === true ? "block" : "none",
    padding: "30px",
    background: "white",
    width: "50%",
    height: "500px",
    border: "2px solid #d2d2d2",
    position: "absolute",
  };

  // 주소 찾기 값 input에 전달
  const onComplete = (data) => {
    if (data === "") {
      return null;
    }
    setInputs({ address: data.address });
    setOpen(false);
    return data.address;
  };

  // 콘솔 확인용
  const submit = () => {
    console.log(getInputs, fileInput.current.value);
  };

  // 에러 해결 테스트용
  // const handleComplete = (data) => {
  //   let fullAddress = data?.address;
  //   let extraAddress = '';
  //   if (data.addressType === 'R') {
  //     if (data.bname !== '') {
  //       extraAddress += data.bname;
  //     }
  //     if (data.buildingName !== '') {
  //       extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
  //     }
  //     fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
  //   }
  //   setInputs({ address: fullAddress })
  //   setOpen(false)
  //   return data.address
  // }

  return (
    <div style={{ display: "flex" }}>
      <ScreenLeft>
        <h1>여러분의 집을 호스팅 해보세요!</h1>
      </ScreenLeft>
      <ScreenRight>
        <InputBox>
          <Textarea>숙소 주소를 입력해주세요</Textarea>
          <Inputarea name="address" value={address || ""} onChange={onChange} />
          <button
            onClick={() => {
              setOpen(!getOpen);
            }}
          >
            주소찾기
          </button>
        </InputBox>
        <DaumPostCode style={postCodeStyle} onComplete={onComplete} />
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
            <option>4명</option>
            <option>8명</option>
            <option>12명</option>
          </Select>
          <Select name="wifi" value={wifi} onChange={onChange}>
            <option>와이파이</option>
            <option>와이파이 있음</option>
            <option>와이파이 없음</option>
          </Select>
        </InputBox>
        <Submit onClick={submit}>호스팅 하기</Submit>
      </ScreenRight>
    </div>
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
