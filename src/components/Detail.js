import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const params = useParams();
  const detail_id = params.id;
  console.log(detail_id);

  return <p>detail페이지입니다.</p>;
}

export default Detail;
