import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const user_name = localStorage.getItem("user_name");

  return <Container></Container>;
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #78909c;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
