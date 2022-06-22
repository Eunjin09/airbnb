import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <CopyRight>
        <YearDiv>© 2022 Airbnb, Inc</YearDiv>
        <CopyRightul>
          <ul>
            <CRli>개인정보 처리방침</CRli>
            <CRli>이용약관</CRli>
            <CRli>사이트맵</CRli>
            <CRli>한국의 변경된 환불 정책</CRli>
            <CRli>회사 세부정보</CRli>
          </ul>
        </CopyRightul>
        <IconDiv></IconDiv>
      </CopyRight>
    </>
  );
};
const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10vh;
  background: f7f7f7;
`;

const CopyRight = styled.div`
  background-color: aliceblue;
  display: flex;
  // border-top: 1px solid rgb(221, 221, 221);
  font-size: 0.9rem;
  padding: 10px 20px;
  margin: 10vh;
`;
const YearDiv = styled.div`
  padding-top: 13px;
`;
const CRli = styled.li`
  float: left;
  margin: 0px 20px;
  font-size: 0.9rem;
`;

const CopyRightul = styled.div``;

const IconDiv = styled.div``;
export default Footer;
