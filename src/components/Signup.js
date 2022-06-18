import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUserDB } from "../redux/modules/userSlice";

function Signup() {
  const userId_ref = React.useRef(null);
  const password_ref = React.useRef(null);
  const repeat_password_ref = React.useRef(null);
  const nickName_ref = React.useRef(null);

  // 이메일 정규표현식

  // 패스워드 정규표현식
  const passwordCheck = (password) => {
    let _reg =
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[@$!%*#?&])[0-9a-zA-Z@$!%*#?&]{6,10}$/;
    // 패스워드는 6 ~ 10자 영문, 숫자 및 특수문자조합
    return _reg.test(password);
  };

  const signup = async () => {
    //인풋값이 전부 비어있을 경우
    if (
      userId_ref.current.value === "" ||
      password_ref.current.value === "" ||
      nickName_ref.current.value === ""
    ) {
      window.alert("정보를 입력해주세요.");
      return;
    }

    // 비밀번호 체크
    if (!passwordCheck(password_ref.current.value)) {
      window.alert(
        "비밀번호는 6 ~ 10자 영문, 숫자 및 특수문자조합으로 작성하세요."
      );
      return;
    }
    //비밀번호 확인 체크
    if (password_ref.current.value !== repeat_password_ref.current.value) {
      window.alert("비밀번호가 일치하지 않습니다.");
      return;
    } else {
      dispatchEvent(
        createUserDB({
          userId: userId_ref.current.value,
          nickName: nickName_ref.current.value,
          password: password_ref.current.value,
        })
      );
    }
  };
  return (
    <>
      <LoginBody>
        <LoginBox>
          <UpperDiv>
            <div>회원가입</div>
          </UpperDiv>
          <DownDiv>
            <Welcome>에어비앤비에 오신 것을 환영합니다.</Welcome>
            <Info>
              모든 칸에서 입력 완료 후 확인을 위해 엔터키를 눌러주세요.
            </Info>

            <SignUpTopInput>
              <Input
                name="userId"
                placeholder="아이디"
                type="text"
                ref={userId_ref}
              ></Input>
            </SignUpTopInput>
            <SignUpMidInput>
              <Input placeholder="닉네임" ref={nickName_ref}></Input>
            </SignUpMidInput>

            <SignUpMidInput>
              <Input
                placeholder="비밀번호"
                type="password"
                ref={password_ref}
              ></Input>
            </SignUpMidInput>
            <SingUpBottomInput>
              <Input
                placeholder="비밀번호 확인"
                type="password"
                ref={repeat_password_ref}
              ></Input>
            </SingUpBottomInput>
            <SignUpButtonDiv>
              <SingUpButton onClick={signup}>가입</SingUpButton>
            </SignUpButtonDiv>
          </DownDiv>
        </LoginBox>
      </LoginBody>
    </>
  );
}

export default Signup;

const LoginBody = styled.div`
  justify-content: center;
  display: flex;
  padding: 80px;
`;

const LoginBox = styled.div`
  height: 720px;
  width: 100%;
  max-width: 570px;
  border: 1.5px solid rgb(235, 235, 235);
  border-radius: 12px;
  position: relative;
  margin-top: 32px 0px;
  overflow: visible;
  box-sizing: border-box;
  bottom: 24px;
  top: 24px;
  right: 0px;
  left: 0px;
`;

const UpperDiv = styled.div`
  height: 64px;
  display: grid;
  place-items: center;
  border-bottom: 1.5px solid rgb(235, 235, 235);
  font-weight: 800;
`;
const P = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: #212121;
  text-align: center;
`;

const DownDiv = styled.div`
  padding: 24px;
  flex: 1 1 auto;
`;

const Welcome = styled.h3`
  font-size: 22px;
  line-height: 26px;
  color: rgb(34, 34, 34);
  font-weight: 400px;
  margin-bottom: 8px;
  margin-left: 16px;
  text-align: left;
`;

const Info = styled.h4`
  line-height: 26px;
  color: rgb(34, 34, 34);
  font-weight: 300px;
  margin-bottom: 4px;
  margin-top: 4px;
  margin-left: 16px;
  text-align: left;
`;

const SignUpTopInput = styled.div`
  display: grid;
  box-sizing: border-box;
  border: 1.5px solid rgb(235, 235, 235);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: none;
`;

const SignUpMidInput = styled.div`
  display: grid;
  box-sizing: border-box;
  border-left: 1.5px solid rgb(235, 235, 235);
  border-top: 1.5px solid rgb(235, 235, 235);
  border-right: 1.5px solid rgb(235, 235, 235);
`;

const SingUpBottomInput = styled.div`
  display: grid;
  box-sizing: border-box;
  border: 1.5px solid rgb(235, 235, 235);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 0px;
  margin: 26px;
  min-height: 1px;
  background-color: transparent;
  text-align: start;
  display: inline-block;
`;

const SignUpButtonDiv = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`;

const SingUpButton = styled.button`
  background-image: radial-gradient(
    circle at center center,
    rgb(255, 56, 92) 0%,
    rgb(230, 30, 77) 27.5%,
    rgb(227, 28, 95) 40%,
    rgb(215, 4, 102) 57.5%,
    rgb(189, 30, 89) 75%,
    rgb(189, 30, 89) 100%
  );
  cursor: pointer;
  display: inline-block;
  margin-top: 40px;
  text-align: center;
  font-size: 16px;
  width: 100%;
  color: #ffffff;
  border: none;
  outline: none;
  height: 50px;
  border-radius: 12px;
  font-weight: 700;
`;
