import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logo } from "../image/index";
import Modal from "react-modal";
import Signup from "./Signup";
import Login from "./Login";

const Header = () => {
  const navigate = useNavigate();
  const user_name = localStorage.getItem("user_name");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [signupModalIsOpen, setSignupModalIsopen] = useState(false);

  return (
    <HeadDiv>
      <Center>
        <div>
          <img
            src={logo}
            width="125px"
            style={{ paddingLeft: " 15px", cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </div>
        <Btn>
          <p>{user_name}</p>
          {user_name ? (
            <>
              <button
                onClick={() => {
                  navigate("/write");
                }}
              >
                작성하기
              </button>
              <button
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setSignupModalIsopen(true)}>
                회원가입
              </button>
              <Modal
                style={{
                  overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  },
                  content: {
                    position: "absolute",
                    alignItems: "center",
                    margin: "auto",
                    width: "800px",
                    border: "1px solid #ccc",
                    background: "#fff",
                    overflow: "auto",

                    WebkitOverflowScrolling: "touch",
                    borderRadius: "4px",
                    outline: "none",
                    padding: "20px",
                  },
                }}
                isOpen={signupModalIsOpen}
                onRequestClose={() => setSignupModalIsopen(false)}
              >
                <Signup />
              </Modal>
              <button onClick={() => setModalIsOpen(true)}>로그인</button>
              <Modal
                style={{
                  overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                  },
                  content: {
                    position: "absolute",
                    alignItems: "center",
                    margin: "auto",
                    width: "800px",
                    border: "1px solid #ccc",
                    background: "#fff",
                    overflow: "auto",

                    WebkitOverflowScrolling: "touch",
                    borderRadius: "4px",
                    outline: "none",
                    padding: "20px",
                  },
                }}
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
              >
                <Login />
              </Modal>
            </>
          )}
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
