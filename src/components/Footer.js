import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <CopyRight>
        <YearDiv>Air BnB 클론코딩 프로젝트</YearDiv>
        <CopyRightul>
          <ul>
            <CRli>FE : 김은진 변희재 이영주 </CRli>
            <CRli>
              github : <a>https://github.com/Eunjin09/airbnb/tree/main</a>
            </CRli>
            <br></br>
            <CRli>BE : 권도훈 박건영 진용희</CRli>
            <CRli>
              github : <a>https://github.com/AirBn-Clone-BE/AirBnB-Clone</a>
            </CRli>
          </ul>
        </CopyRightul>
        <IconDiv></IconDiv>
      </CopyRight>
    </>
  );
};

const CopyRight = styled.div`
  background-color: white;
  display: flex;
  border-top: 1px solid rgb(221, 221, 221);
  font-size: 0.9rem;
  padding: 10px 20px;
  margin: 3vh;
`;
const YearDiv = styled.div`
  padding-top: 13px;
`;
const CRli = styled.li`
  float: left;
  margin: 0px 20px;
  padding: 3px;
  font-size: 0.9rem;
`;

const Hr = styled.div`
  margin: 5% 0;
  border-top: 1px solid #9c9c9c;
  border-bottom: 1px solid #f6f6f6;
  border-color: #dddddd;
`;

const CopyRightul = styled.div``;

const IconDiv = styled.div``;
export default Footer;
