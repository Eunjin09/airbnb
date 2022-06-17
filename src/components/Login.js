import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <LoginWrap></LoginWrap>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginWrap = styled.div`
  margin-top: 5%;
  background-color: #78909c;
  height: 60%;
  width: 30%;
  border-radius: 5%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
