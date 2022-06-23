import React, { useState } from "react";
import DatePicker from "react-datepicker"; // DatePicker 라는 컴포넌트도 가져오깅

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      inline
    />
  );
}
export default Calendar;
