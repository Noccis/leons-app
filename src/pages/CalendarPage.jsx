import React from "react";
import CurrentDayContainer from "../components/CurrentDayContainer";
import CalendarContainer from "../components/CalendarContainer";
import { StyledCalendarPage } from "../components/styled/CalendarPage.styled";

const CalendarPage = () => {
  return (
    <StyledCalendarPage>
      <CurrentDayContainer />
      <CalendarContainer />
    </StyledCalendarPage>
  );
};

export default CalendarPage;
