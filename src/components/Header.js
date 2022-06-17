import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logo } from "../image/index";
const Header = () => {
  const navigate = useNavigate();
  const user_name = localStorage.getItem("user_name");

  return (
    <HeadDiv>
      <Center>
        <div>
          <img src={logo} width="125px" style={{ paddingLeft: " 15px" }} />
        </div>
        <Btn>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입
          </button>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </button>
        </Btn>
      </Center>
    </HeadDiv>
  );
};

export default Header;

const Center = styled.div`
  min-width: 1150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center !important;
  margin: auto;
`;

const HeadDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background: #ffffff !important;
`;

const Btn = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  & > * {
    margin-right: 20px;
  }
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: medium;
    :hover {
      color: #78909c;
    }
  }
`;
