import React from "react";
import styled from "styled-components";
import reset from "../reset.css";

function Write() {
  return (
    <>
      <div>
        <div className="section1">
          <div style={btnStyle}>
            버튼
          </div>
          <div></div>
        </div>
        <div className="section2">다음 섹션 내용</div>
      </div>
    </>
  )
}

const btnStyle = {
  display: "inline-block",
  border: "1px solid black",
  padding: "3px",
  cursor: "pointer",
};

const box_active = {
  width: "300px",
  height: "200px",
  border: "1px solid black",
  position: "relative",
  background: "grey",
  opacity: "1",
  transition: "opacity 500ms",
};

const box_hidden = {
  width: "300px",
  height: "200px",
  border: "1px solid black",
  position: "absolute",
  background: "grey",
  opacity: "0",
  visibility: "hidden",
  transition: "opacity 500ms , visibility 500ms",
};
export default Write;
