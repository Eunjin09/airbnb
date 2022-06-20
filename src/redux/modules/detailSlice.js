import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//axios
//작성한 숙소정보 가져오기
export const loadDetailDB = (id) => {
  return async function (dispatch) {
    await axios.get(`http://localhost:8080/detail/${id}`).then((response) => {
      console.log(response);
      dispatch(houseLoad(response.data));
    });
  };
};

//action, action function, reducer
export const detailSlice = createSlice({
  name: "detaillist",
  initialState: {
    list: [
      {
        id: 1,
        address: "한국 강원도",
        houseName: "숙소 이름",
        image:
          "https://a0.muscache.com/im/pictures/3639808c-8b04-4edf-b25a-c5e7e2adb254.jpg?im_w=1440",
        price: 10000,
        houseInfo: "숙소 정보",
        personCnt: 3,
        wifi: true,
        parking: false,
      },
    ],
  },
  reducers: {
    //등록한 숙소 정보 불러오기
    houseLoad: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { houseLoad } = detailSlice.actions;
export default detailSlice.reducer;
